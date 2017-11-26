//
//  Constants.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import UIKit

class Constants: NSObject {

	//	static let baseApiUrl = "http://192.168.21.230:3000/api/"
	static let baseApiUrl = "https://lalalendapi.clearsystems.asia/api/"
	//	https://lalalend.clearsystems.asia/explorer/



	static let apiAppToken = "apptoken"
	static let BCErrorKey = "errors"
	static let TCMenuWidth : CGFloat = 256.0
	static let CurrentUser = "CurrentUser"

	// Test data

	static let staticETH = 650

	class func historyList() -> [History] {
		var historyRecord: [History] = []
		let history1 = History()
		history1.creditId = 1
		history1.traderId = 3
		history1.historyOwnerId = 1
		history1.dateTime = 1511203760
		history1.totalValue = 300
		history1.status = "Approved"

		let history2 = History()
		history2.creditId = 2
		history2.traderId = 3
		history2.historyOwnerId = 1
		history2.dateTime = 1510003760
		history2.totalValue = 500
		history2.status = "Pending"

		let history3 = History()
		history3.creditId = 4
		history3.traderId = 1
		history3.historyOwnerId = 4
		history3.dateTime = 1500203760
		history3.totalValue = 400
		history3.status = "Liquidated"

		historyRecord.append(history1)
		historyRecord.append(history2)
		historyRecord.append(history3)
		return historyRecord
	}
}
