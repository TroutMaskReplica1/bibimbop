spec:
  input: "1"
  output: "Beep!"

spec:
  input: "2"
  output: "Boop!"

spec:
  input: "3"
  output: "I'm sorry, Dave. I'm afraid I can't do that."

If the input has two or more numbers to act on, use the most "important" rule that applies, the rule that comes last that can be used upon it.

spec:
  input: "13"
  output: "I'm sorry, Dave. I'm afraid I can't do that."

spec:
  input: "21"
  output: "Boop!"

spec:
  input:"32"
  output: "I'm sorry, Dave. I'm afraid I can't do that."
