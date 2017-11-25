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
	case BalanceOf(User)
	case BidCredit(Double)

  func toJSON() -> JSON {
    switch self {
    case .SignIn(_):
			return JSON.init(object: self.toParam())
		case .BalanceOf(_):
			return JSON.init(object:self.toParam())
		case .BidCredit(_):
			return JSON.init(object:self.toParam())
		}
	}

	func toParam() -> Parameters {
		switch self {
		case .SignIn(let user):
			return ["email": user.email, "password": user.password]
		case .BalanceOf(let user):
			return ["address": user.address, "timestamp": Date.timeIntervalSinceReferenceDate]
		case .BidCredit(let rate):
			return ["rate": rate]
		}
	}

}


