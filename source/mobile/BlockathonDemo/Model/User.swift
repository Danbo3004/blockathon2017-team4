//
//  User.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit
import SwiftyJSON

class User: BaseModel {
	var phone = ""
	var email = ""
	var username = ""
	var password = ""
	var userType = ""
	var deviceToken = ""
	var accessToken = ""
	var ETHBalance = -1.0
	var tokenBalance = -1.0
	var address = ""

	func updateObject(json: JSON) {
		self.username = json["username"].stringValue
		self.email = json["email"].stringValue
		self.userType = json["userType"].stringValue
		self.address = json["address"].stringValue
	}

	func requestSignIn(completion: ((Error?) -> Void)?) {
		APIFoundation.requestSignInWithParams(param: BCJSONParams.SignIn(self)) { (json: JSON?, error: Error?) in
			if let error = error {
				completion!(error)
			} else if let json = json {
				if (json["id"].string != nil) {
					self.accessToken = json["id"].stringValue
					self.id = json["userId"].intValue
					completion!(nil);
				}
			}
		}
	}

	func requestUserData(completion: ((User, Error?) -> Void)?) {
			APIFoundation.requestFetchUser() { (json: JSON?, error: Error?) in
				if let error = error {
					completion!(self, error)
				} else if let json = json {
					for userJson in json.array! {
						if userJson["id"].intValue == self.id {
							self.updateObject(json: userJson)
							break;
						}
					}
					completion!(self, nil);
				}
			}
	}

	func requestUserBalance(completion: ((User, Error?) -> Void)?) {
		APIFoundation.requestBalance(param: BCJSONParams.BalanceOf(self)){ (json: JSON?, error: Error?) in
			if let error = error {
				completion!(self, error)
			} else if let json = json {
				for userJson in json.array! {
					if userJson["id"].intValue == self.id {
						self.updateObject(json: userJson)
						break;
					}
				}
				completion!(self, nil);
			}
		}
	}

	func requestAllUser(completion: (([User], Error?) -> Void)?) {
		APIFoundation.requestFetchUser() { (json: JSON?, error: Error?) in
			if let error = error {
				completion!([], error)
			} else if let json = json {
				var userList = [User]()
				for userJson in json.array! {
					let newUser = User()
					newUser.id = userJson["id"].intValue
					newUser.updateObject(json: userJson)
					userList.append(newUser)
				}
				completion!(userList, nil);
			}
		}

	}
}

