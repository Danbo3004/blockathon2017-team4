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
	var address = ""

	func requestSignIn(completion: ((Error?) -> Void)?) {
		APIFoundation.requestSignInWithParams(param: BCJSONParams.SignIn(self)) { (json: JSON?, error: Error?) in
			if let error = error {
				completion!(error)
			}
			if let json = json {
				if (json["id"].string != nil) {
					self.accessToken = json["id"].stringValue
					completion!(nil);
				}
			}
		}
	}
}

