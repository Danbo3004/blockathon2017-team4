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
	var historyOwnerId: Int = 0
	var creditId: Int = 0
	var dateTime: TimeInterval = 0
	var totalValue = 0.0
	var traderId: Int = 0
	var status = ""
	var interestRate = 0.0
	var historyOwner: User?
	var trader: User?

	func updateObject(json: JSON) {
		self.id = json["id"].intValue
		self.historyOwnerId = json["lenderId"].intValue
		self.traderId = json["borrowerId"].intValue
		self.dateTime = json["created"].doubleValue
		self.totalValue = json["amount"].doubleValue
		self.interestRate = json["rate"].doubleValue
		self.status = json["status"].stringValue
		self.creditId = json["creditId"].intValue
		for user in DataManager.shared.userList {
			if user.id == traderId {
				trader = user
				break
			} else if user.id == historyOwnerId {
				historyOwner = user
				break
			}
		}

	}

	class func filterHistory(user: User, historyList: [History]) -> [History] {
		var filterHistoryList: [History] = []
		for history: History in historyList {
			if (history.historyOwnerId == user.id || history.traderId == user.id) {
				filterHistoryList.append(history)
			}
		}
		return filterHistoryList;
	}

	class func requestAllHistory(user: User, completion: (([History], Error?) -> Void)?) {
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
				historyList = History.filterHistory(user: user, historyList: historyList)
				completion!(historyList, nil);
			}
		}
	}

}
