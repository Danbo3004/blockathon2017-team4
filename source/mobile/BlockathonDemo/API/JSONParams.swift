//
//  JSONParams.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation
import SwiftyJSON
import Alamofire

protocol JSONParams {
  func toJSON() -> JSON
	func toParam() -> Parameters
}

enum BCJSONParams: JSONParams {
  case SignIn(User)

  func toJSON() -> JSON {
    switch self {
    case .SignIn(let user):
			return JSON.init(object: ["user": ["email": user.email, "password": user.password]])
		}
	}

	func toParam() -> Parameters {
		switch self {
		case .SignIn(let user):

			return ["user": ["email": user.email, "password": user.password]]
		}
	}
}


