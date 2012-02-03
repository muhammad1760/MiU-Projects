//Rashad Muhammad
//Assignment 1
//VFW - 1202


var json = {
	"show1": {
		"showname": ["Name of Show:", "Lovers"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "12:30"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "Showtime"],
		"showday": ["Show Day(s):", "Saturday"],
		"favorite": ["My Favorite Meter:", "7"],
		"comments": ["Comments about this show:", "This is a great show!"]
	},
	"show2": {
		"showname": ["Name of Show:", "Haters"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "05:30"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "HBO"],
		"showday": ["Show Day(s):", "Wednesday"],
		"favorite": ["My Favorite Meter:", "9"],
		"comments": ["Comments about this show:", "Love the hate!!"]
	},
	"show3": {
		"showname": ["Name of Show:", "No More Drama"],
		"startdate":["Date Entered:", "01-26-2012"],
		"starttime": ["Show Time:", "10:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "ABC"],
		"showday": ["Show Day(s):", "Monday"],
		"favorite": ["My Favorite Meter:", "10"],
		"comments": ["Comments about this show:", "The greatest!"]
	},
	"show4": {
		"showname": ["Name of Show:", "Say Yes To the Dress"],
		"startdate":["Date Entered:", "01-27-2012"],
		"starttime": ["Show Time:", "18:30"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "Oxygen"],
		"showday": ["Show Day(s):", "Wednesday"],
		"favorite": ["My Favorite Meter:", "4"],
		"comments": ["Comments about this show:", "Pick out bridal dress."]
	},
	"show5": {
		"showname": ["Name of Show:", "What Would You Do"],
		"startdate":["Date Entered:", "01-30-2012"],
		"starttime": ["Show Time:", "18:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "OWN"],
		"showday": ["Show Day(s):", "Thursday"],
		"favorite": ["My Favorite Meter:", "5"],
		"comments": ["Comments about this show:", "Love Rosie!"]
	},
	"show6": {
		"showname": ["Name of Show:", "Lovers"],
		"startdate":["Date Entered:", "01-29-2012"],
		"starttime": ["Show Time:", "21:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "ABC"],
		"showday": ["Show Day(s):", "Saturday"],
		"favorite": ["My Favorite Meter:", "7"],
		"comments": ["Comments about this show:", "I would hate to be on this show!"]
	},
	"show7": {
		"showname": ["Name of Show:", "Wipeout"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "19:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "ABC"],
		"showday": ["Show Day(s):", "Thursday"],
		"favorite": ["My Favorite Meter:", "6"],
		"comments": ["Comments about this show:", "Hilarious!"]
	},
	"show8": {
		"showname": ["Name of Show:", "Revenge"],
		"startdate":["Date Entered:", "02-1-2012"],
		"starttime": ["Show Time:", "20:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "ABC"],
		"showday": ["Show Day(s):", "Wednesday"],
		"favorite": ["My Favorite Meter:", "9"],
		"comments": ["Comments about this show:", "Good plot!"]
	},
	"show9": {
		"showname": ["Name of Show:", "Modern Family"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "19:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "ABC"],
		"showday": ["Show Day(s):", "Wednesday"],
		"favorite": ["My Favorite Meter:", "10"],
		"comments": ["Comments about this show:", "Twisted!"]
	},
	"show10": {
		"showname": ["Name of Show:", "Cold Case"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "12:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "NBC"],
		"showday": ["Show Day(s):", "Tuesday"],
		"favorite": ["My Favorite Meter:", "4"],
		"comments": ["Comments about this show:", "Pretty Good!"]
	},
	"show11": {
		"showname": ["Name of Show:", "The Vampire Diaries"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "19:00"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "Misc"],
		"showday": ["Show Day(s):", "Thursday"],
		"favorite": ["My Favorite Meter:", "7"],
		"comments": ["Comments about this show:", "Vampires Rock!"]
	},
	"show12": {
		"showname": ["Name of Show:", "Wife Swap"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "11:00"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "VH1"],
		"showday": ["Show Day(s):", "Saturday"],
		"favorite": ["My Favorite Meter:", "6"],
		"comments": ["Comments about this show:", "Couldn't be me!"]
	},
	"show13": {
		"showname": ["Name of Show:", "NCIS"],
		"startdate":["Date Entered:", "01-27-2012"],
		"starttime": ["Show Time:", "14:30"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "CBS"],
		"showday": ["Show Day(s):", "Monday"],
		"favorite": ["My Favorite Meter:", "7"],
		"comments": ["Comments about this show:", "This is a great show!"]
	},
	"show14": {
		"showname": ["Name of Show:", "Lost"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "01:30"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "CNN"],
		"showday": ["Show Day(s):", "Saturday"],
		"favorite": ["My Favorite Meter:", "3"],
		"comments": ["Comments about this show:", "Informative."]
	},
	"show15": {
		"showname": ["Name of Show:", "Man Vs Food"],
		"startdate":["Date Entered:", "01-25-2012"],
		"starttime": ["Show Time:", "16:30"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "Discovery"],
		"showday": ["Show Day(s):", "Sunday"],
		"favorite": ["My Favorite Meter:", "6"],
		"comments": ["Comments about this show:", "Gluttony, I love it!"]
	},
	"show16": {
		"showname": ["Name of Show:", "Around the World"],
		"startdate":["Date Entered:", "01-26-2012"],
		"starttime": ["Show Time:", "11:30"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "CNN"],
		"showday": ["Show Day(s):", "Monday"],
		"favorite": ["My Favorite Meter:", "4"],
		"comments": ["Comments about this show:", "Informative."]
	},
	"show17": {
		"showname": ["Name of Show:", "Inkwell"],
		"startdate":["Date Entered:", "01-29-2012"],
		"starttime": ["Show Time:", "18:30"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "Starz"],
		"showday": ["Show Day(s):", "Friday"],
		"favorite": ["My Favorite Meter:", "9"],
		"comments": ["Comments about this show:", "Attractive!"]
	},
	"show18": {
		"showname": ["Name of Show:", "Fair/Balanced?"],
		"startdate":["Date Entered:", "01-31-2012"],
		"starttime": ["Show Time:", "12:30"],
		"dayornight": ["Day/Night:", "PM"],
		"channel": ["Show Channel:", "Fox News"],
		"showday": ["Show Day(s):", "Wednesday"],
		"favorite": ["My Favorite Meter:", "1"],
		"comments": ["Comments about this show:", "Why did I save this?"]
	},
	"show19": {
		"showname": ["Name of Show:", "Soul Train"],
		"startdate":["Date Entered:", "02-1-2012"],
		"starttime": ["Show Time:", "00:30"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "BET"],
		"showday": ["Show Day(s):", "Wednesday"],
		"favorite": ["My Favorite Meter:", "10"],
		"comments": ["Comments about this show:", "Tribute to Don Cornelius!"]
	},
	"show20": {
		"showname": ["Name of Show:", "The End"],
		"startdate":["Date Entered:", "02-02-2012"],
		"starttime": ["Show Time:", "10:30"],
		"dayornight": ["Day/Night:", "AM"],
		"channel": ["Show Channel:", "MSNBC"],
		"showday": ["Show Day(s):", "Saturday"],
		"favorite": ["My Favorite Meter:", "6"],
		"comments": ["Comments about this show:", "Done!"]
	}
}