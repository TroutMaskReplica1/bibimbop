# _Beep Boop!_

#### _Week 3 independent project, 1/25/2019_

#### By _**Ryan Dikeos**_

## Description

_This is a site that takes the number the user enters and returns a list of all the numbers between 0 and that number with all 1's turned into beep, all 2's turned to boop, and all 3's replaced with I'm sorry, Dave. I can't let you do that. This is an exercise in JavaScript._

## Setup/Installation Requirements

* _Clone this repository_
* _Open by double clicking index.html_

## Known Bugs

_No known bugs_

## Support and contact details

_Email me at ryan.dikeos@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Bootstrap_

### License

*MIT*

Copyright (c) 2019 **_Ryan Dikeos_**


## Specs:

spec:
  input: "1"
  output: "Beep!"
The input is turned into a "word", taken apart at the "letters", and then transformed into "Beep!"


spec:
  input: "2"
  output: "Boop!"
The input is turned into a "word", taken apart at the "letters", and then transformed into "Boop!".


spec:
  input: "3"
  output: "I'm sorry, Dave. I'm afraid I can't do that."
The input is turned into a "word", taken apart at the "letters", and then transformed into "I'm sorry, Dave. I'm afraid I can't do that." 


If the input has two or more numbers to act on, use the most "important" rule that applies, the rule that comes last that can be used upon it.

spec:
  input: "13"
  output: "I'm sorry, Dave. I'm afraid I can't do that."
 The input is turned into a "word", taken apart at the "letters", and then transformed into "I'm sorry, Dave. I'm afraid I can't do that." because the rule for threes superseceds the rule for twos, as the rule for twos supercedes the rule for ones.


spec:
  input: "21"
  output: "Boop!"
The input is turned into a "word", taken apart at the "letters", and then transformed into "Boop!" because the rule for twos supercedes the rule for ones.

spec:
  input:"32"
  output: "I'm sorry, Dave. I'm afraid I can't do that."
The input is turned into a "word", taken apart at the "letters", and then transformed into "I'm sorry, Dave. I'm afraid I can't do that." because the rule for threes superseceds the rule for twos, as the rule for twos supercedes the rule for ones.
