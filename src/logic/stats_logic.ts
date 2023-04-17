import { NextFunction, Request, Response } from "express";
import { Item } from "../entity/item";
import { replaceAll } from "../utils/replaceAll";
import create_inventory_view from "../view/view_inventory";

const view_inventory = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

    //Get the inventory
      const item_details = await Item.find({
        where: { deprecated: false },
        order: { created_at: "DESC" },
      });


      //Get numbers for stats
      let programs: string[];
      let programCount: number[];
      let availableCount = 0;
      let reservedCount = 0;
      item_details.forEach((ele) => {
            if(ele.status == "available")
                availableCount++;
            else if(ele.status == "reserved")
                reservedCount++;

            if(programs.indexOf(ele.code_name) != -1)
                programCount[programs.indexOf(ele.code_name)]++;
            else{
                programs.push(ele.code_name);
                programCount[programs.indexOf(ele.code_name)] = 1;
            }   
            
      });
  
      
      
      //Send complete view
      res.status(200).json(inv.getData());
    } catch (err) {
      next(err);
    }
  };

