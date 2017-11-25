//
//  History.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation
import SwiftyJSON

class History: BaseModel {
	var historyOwner = ""
	var creditId: Int = 0
	var dateTime = ""
	var totalValue = 0.0
	var traderName = ""
	var status = ""
	var interestRate = 0.0

	func updateObject(json: JSON) {
		self.id = json["id"].intValue
		self.historyOwner = json["lenderId"].stringValue
		self.traderName = json["email"].stringValue
		self.dateTime = json["userType"].stringValue
		self.totalValue = json["address"].doubleValue
		self.interestRate = json["rate"].doubleValue
		self.status = json["status"].stringValue
		self.creditId = json["creditId"].intValue
	}

	func requestAllHistory(userId: Int, completion: (([History], Error?) -> Void)?) {
		APIFoundation.requestFetchHistory() { (json: JSON?, error: Error?) in
			if let error = error {
				completion!([], error)
			} else if let json = json {
				var historyList = [History]()
				for objectJson in json.array! {
					let newHistory = History()
					newHistory.id = objectJson["id"].intValue
					newHistory.updateObject(json: objectJson)
					historyList.append(newHistory)
				}
				completion!(historyList, nil);
			}
		}
	}

}
