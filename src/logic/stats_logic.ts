import { NextFunction, Request, Response } from "express";
import { Item } from "../entity/item";
import create_stat_view from "../view/view_stats";
import { DeviceStatus } from "../utils/DeviceStatus";

const view_stats = async (_req: Request, res: Response, next: NextFunction) => {
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
    let checkedOut = 0;
    let broken = 0;
    let lost = 0;
    let stolen = 0;

    item_details.forEach((ele) => {
      if (ele.status == DeviceStatus.AVAILIABLE) availableCount++;
      else if (ele.status == DeviceStatus.RESERVED) reservedCount++;
      else if (ele.status == DeviceStatus.CHECKEDOUT) checkedOut++;
      else if (ele.status == DeviceStatus.BROKEN) broken++;
      else if (ele.status == DeviceStatus.LOST) lost++;
      else if (ele.status == DeviceStatus.STOLEN) stolen++;

            if(programs.indexOf(ele.code_name) != -1)
                programCount[programs.indexOf(ele.code_name)]++;
            else{
                programs.push(ele.code_name);
                programCount[programs.indexOf(ele.code_name)] = 1;
            }   
            
      });
      
      //Desired standard statistic for available devices
      let len = item_details.length;
      let inv = new create_stat_view();
      inv.addFirst(availableCount, reservedCount, checkedOut, (len - (availableCount + reservedCount + checkedOut)));
      inv.addItem("broken", broken, "broken", (len - broken));
      inv.addItem("lost", lost, "lost", (len - lost));
      inv.addItem("stolen", broken, "stolen", (len - stolen));

    //Get stats for other programs
    for (let i = 0; i < programs!.length; i++) {
      let other = len - programCount![i];
      inv.addItem(programs![i], programCount![i], programs![i], other);
    }

    //Send complete view
    res.status(200).json(inv.getData());
  } catch (err) {
    next(err);
  }
};

export = { view_stats };
