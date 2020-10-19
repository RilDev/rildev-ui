# RilDev UI

_This is the UI code for my developer website_

Website URL: [https://rildev.website](https://rildev.website)

## Portfolio

### Stylized

_Make your prototypes look good with a stylish stylesheet!_

Stack: CSS3, HTML5, JavaScript (ES6), Responsive

Website URL: [https://rildev.github.io/stylized/](https://rildev.github.io/stylized/)

GitHub: [https://github.com/RilDev/stylized](https://github.com/RilDev/stylized)

NPM Package: [https://github.com/RilDev/stylized/packages/361151](https://github.com/RilDev/stylized/packages/361151)

### Code for Faith

_Make your prototypes look good with a standard minimal css stylesheet!_

Stack: GatsbyJS, ReactJS, JSX, CSS3, Multilingual, Responsive

Website URL: [https://codeforfaith.com](https://codeforfaith.com)

GitHub: [https://github.com/RilDev/code-for-faith-ui](https://github.com/RilDev/code-for-faith-ui)

### Saved Together

_Official website of the YouTube channel Saved Together_

Stack: ReactJS, WordPress, JSX, CSS3, Responsive

Website URL: [https://savedtogether.life](https://savedtogether.life)

GitHub: [https://github.com/RilDev/saved-together-ui](https://github.com/RilDev/saved-together-ui)

### MSG Codes

_Type a message and generate a link. This link will be usable only once._

Stack: ReactJS, DenoJs, JSX, CSS3, Responsive

Website URL: 

GitHub: [https://github.com/RilDev/msg-codes-ui](https://github.com/RilDev/msg-codes-ui)

### Imagizer

_Resize, progessive encode and serve images on the fly_

Stack: 

Website URL: 

GitHub: 

### Interviewgator

_Review and practice common data structures to prepare for your... interviewgation!_

Stack: 

Website URL: 

GitHub: 

### Wordency

_Upload a text file & get its word frequency_

Stack: 

Website URL: 

GitHub: 

### Basic French

_Like Basic English, but for learning French_

Stack: 

Website URL: 

GitHub: 

### Tinoti

_Tinoti stands for Timed Notifications. Shows notifications with short messages and sound_

Stack: Python

Website URL: 

GitHub: 

Todo:

- [ ] add notifications
- [ ] list notifications
- [ ] remove notification
- [ ] timer
- [ ] launch on computer boot

Technical implementation:

- Each notification has: id, time, text, priority
- gi.Notify
- sqlight
- .bashrc or crontab to autostart on boot

### Mathor

_Your math mentor to practice mental calculation in the comfort of your terminal_

`mathor` start a series of 10 questions including additions, substractions, multiplications and divisions. At the end of the series, it gives your result and the time it took you to complete the test. It also show the correct answers where you got it wrong.

Stack: Python

Website URL: 

GitHub: 

Todo:

- [ ] create basic game
- [ ]  test all inputs!
- [ ] -o, --operator: default `all`. options: `+`, `-`, `*` and `/`
- [ ] -q, --questions: default `10`. enter integer `n` to specify how many questions you want in the series.
- [ ] -d, --difficulty: default `1`. enter integer `n` to chose the max length of the numbers you will be working with. ex: if you enter `3`, the numbers you will be prompt with will be from `1` to `3` digits. So `12 + 345` or `99 * 5`.
- [ ] -h, --help: help menu. Show all options.

### Gh-Packages

_Like gh-pages, but to publish packages!_

Add `"package": "gh-packages"` to your `package.json` file

Run `npm run package` to publish a patch

Run `VERSION=minor npm run package` to publish a minor update

Run `VERSION=major npm run package` to publish a major update

### OGame Admin Panel

_Well it's an OGame bot... that you can tinker to fit your needs!_

Stack: Python

Website URL:

GitHub:

Todo:

- [ ] scrap realtime account information
- [ ] study how to play a maximum efficency
- [ ] implement "play style" options
- [ ] manage user accounts
- [ ] check OGame code of conduct to make it legal
- [ ] automatically manage ressources on an 8 hours loop
- [ ] plan for buildings, attacks, spying, new tecknologies...

### Rot

The Rote memorization CLI tool.

I made this tool to make it easy to learn and review Bible verses.

PS: Rot means red in German. And the words of the Lord Jesus Christ are in red in some Bibles.

Stack: Python Click

Website URL:

GitHub:

Todo:

- [ ] add new card
- [ ] add new decks
- [ ] add start study
- [ ] add edit card
- [ ] add edit deck
- [ ] add delete card
- [ ] add delete deck
- [ ] add copy card to other deck
- [ ] add backup deck
- [ ] add reset card progress
- [ ] add reset deck progress
- [ ] add list decks (show ids, names, card count, cards count to review)
- [ ] add list cards in deck (show ids, front, exerpt back, days_before_review)
- [ ] add text formating italic `_text_`
- [ ] add text formating bold `__text__`
- [ ] add text formating red `___text___`

Database structure:

*cards:* 

id, int auto-increament pk

front, text not null

back, text not null

*decks:*

id, int auto-increament pk

name, text not null

*deck_lists:* index for efficient search

deck_id, int fk decks.id 

card_id, int fk cards.id

*card_reviews:*

card_id, int fk cards.id

last_seen, date year-month-day

days_before_review, int default 0

Review Logic:

When card is created, set last_seen to `null` and days_before_review to `0`

```
// update the last seen variable
last_seen = current_date

if answer correctly:
  // double the number of days before review, example 4 days will become 8 days
  if days_before_review > 0:
    days_before_review *= 2
  else:
    // if seen for the first time or answered it wrong the day before
    days_before_review = 1
else:
  // when user forgets card, reset card progress
  days_before_review = 0
```

all operations on cards and decks (start, update, delete...) are done using ids.

all operations execpt update can take multiple ids at once.

__## Todo

- [ ] remake website layout
- [ ] split code into separate components
- [ ] update favicon with all sizes
