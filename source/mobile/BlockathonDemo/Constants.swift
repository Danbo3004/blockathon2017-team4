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

	class func historyList() -> [History] {
		var historyRecord: [History] = []
		let newHistory = History()
		newHistory.creditId = 1
		newHistory.traderId = 1
		newHistory.historyOwnerId = 3
		newHistory.dateTime = 1511603760
		newHistory.totalValue = 300
		newHistory.status = "Approved"

		historyRecord.append(newHistory)
		return historyRecord
	}
}
