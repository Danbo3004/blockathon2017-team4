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
	var dateTime = ""
	var totalValue = 0.0
	var traderName = ""
	var actionType = ""
	var status = ""
	var interestRate = 0.0
}
