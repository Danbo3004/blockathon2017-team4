//
//  NSError+Extension.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/25/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation

enum BCError: Error {
	case UserIdInvalid
	case LoginDataIncorrectFormat
	case FileNotFound
}

extension NSError {

	public class func savingDataError() -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: 1, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Save data to Realm fail", comment: "")])
	}

	public class func internalServerError() -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: 501, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Internal server error", comment: "")])
	}

	public class func requestAPIResponseError(errorMessage: String) -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: 400, userInfo: [NSLocalizedDescriptionKey: errorMessage])
	}

	public class func responseDataErrorWithCode(errorCode: Int) -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: errorCode, userInfo: [NSLocalizedDescriptionKey: NSLocalizedString("Response data is not correct", comment: "")])
	}

	public class func networkUnreachableError() -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: 0, userInfo: [NSLocalizedDescriptionKey : NSLocalizedString("Network not reachable", comment: "")])
	}

}
