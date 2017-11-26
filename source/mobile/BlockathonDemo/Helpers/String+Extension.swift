//
//  String+Extension.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation

extension String {
	static func stringFromTimeInterval(interval: TimeInterval) -> String {
		let date = Date(timeIntervalSince1970: interval)
		let dateFormatter = DateFormatter()
		dateFormatter.timeZone = TimeZone(abbreviation: "GMT") //Set timezone that you want
		dateFormatter.locale = NSLocale.current
		dateFormatter.dateFormat = "MMM dd" //Specify your format that you want
		let strDate = dateFormatter.string(from: date)
		return strDate
	}
}
