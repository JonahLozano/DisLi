import { NextFunction, Request, Response } from "express";
import { Item } from "../entity/item";
import create_stat_view from "src/view/view_stats";

const view_stats = async (
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
      
      //Desired standard statistic for available devices
      let len = item_details.size();
      let inv = new create_stat_view();
      inv.addFirst(availableCount, reservedCount, (len - (availableCount + reservedCount)));

      //Get stats for other programs
      for(let i = 0; i < programs.length; i++){
        let other = len - programCount[i]; 
        inv.addItem(programs[i], programCount[i], programs[i], other);
      }

      
      //Send complete view
      res.status(200).json(inv.getData());
    } catch (err) {
      next(err);
    }
  };

  export = {view_stats};

