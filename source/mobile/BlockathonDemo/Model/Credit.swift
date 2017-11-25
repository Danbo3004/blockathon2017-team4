//
//  Credit.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation
import SwiftyJSON

class Credit: BaseModel {
	var borrowerId = 0
	var amount = 0.0
	var rate = 0.0
	var expired = "false"
	var lenderId = 0
	var status = "created"
	var borrower: User?
	var lender: User?

	func updateObject(json: JSON) {
		self.borrowerId = json["borrowerId"].intValue
		self.amount = json["amount"].doubleValue
		self.rate = json["rate"].doubleValue
		self.expired = json["expired"].stringValue
		self.lenderId = json["lenderId"].intValue
		self.status = json["status"].stringValue
		self.created = json["created"].doubleValue
		for user in DataManager.shared.userList {
			if user.id == self.borrowerId {
				self.borrower = user
			}
			if user.id == self.lenderId {
				self.lender = user
			}
		}
	}

	class func requestAllCredit(user: User, completion: (([Credit], Error?) -> Void)?) {
		APIFoundation.requestFetchCredit() { (json: JSON?, error: Error?) in
			if let error = error {
				completion!([], error)
			} else if let json = json {
				var creditList = [Credit]()
				for objectJson in json.array! {
					let newCredit = Credit()
					newCredit.id = objectJson["id"].intValue
					newCredit.updateObject(json: objectJson)
					creditList.append(newCredit)
				}
				completion!(creditList, nil);
			}
		}
	}

	func requestBidCredit(bidRate: Double, completion:((Error?) -> Void?)?) {
		APIFoundation.requestBidCredit(param: BCJSONParams.BidCredit(bidRate)) { (json: JSON?, error: Error?) in
			if let error = error {
				completion!(error)
			} else if let json = json {
				var creditList = [Credit]()
				for objectJson in json.array! {
					let newCredit = Credit()
					newCredit.id = objectJson["id"].intValue
					newCredit.updateObject(json: objectJson)
					creditList.append(newCredit)
				}
				completion!(nil);
			}
		}

	}

}
