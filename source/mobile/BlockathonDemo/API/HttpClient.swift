//
//  HttpClient.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation
import Alamofire
import SwiftyJSON

public class HttpClient {

	public class func request(url: URLRequestConvertible, showHUD: Bool = true, completion: @escaping ((JSON?, Error?) -> Void)) {

		if showHUD {
			NotificationCenter.default.post(name: NSNotification.Name(rawValue: Constants.BCNotificationDidBeginRequest), object: nil)
		}

		UIApplication.shared.isNetworkActivityIndicatorVisible = true
		Alamofire.request(url).validate().responseJSON { (data:DataResponse<Any>) in
			UIApplication.shared.isNetworkActivityIndicatorVisible = false
			if showHUD {
				NotificationCenter.default.post(name: NSNotification.Name(rawValue: Constants.BCNotificationDidEndRequest), object: nil)
			}
			self.preprocessResponseFromServer(response: data.response, data: data.data, error: data.error, completion: completion)
		}
	}

}

//MARK: - Request Handlers

extension HttpClient {

	class func preprocessResponseFromServer(response: HTTPURLResponse?, data: Data?, error: Error?, completion: ((JSON?, Error?) -> Void)) {
		if let response = response {
			if let data = data {
				if data.count > 0 {
					do {
						let json = try JSON.init(data: data)

						if let errorMessage = json[Constants.BCErrorKey].string {
							completion(nil, NSError(domain: Constants.baseApiUrl, code: response.statusCode, userInfo: [NSLocalizedDescriptionKey: errorMessage]))
						} else {
							completion(json, nil)
						}
					} catch { }
				} else if data.count == 0 {
					completion(nil, nil)
				} else {
					completion(nil, NSError.internalServerError())
				}
			}
		} else {
			completion(nil, error)
		}
	}

	private class func descriptionForHTTPStatus(status: Int) -> String {
		let s = "HTTP Status \(status)"
		let description: String = {
			switch status {
			case 400: return NSLocalizedString("Bad Request", comment: "")
			default: return NSLocalizedString("Internal Server Error", comment: "") }
		}()
		return "\(s): \(description)"
	}

}
