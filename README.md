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

Do a CLI tool and then make it a web service.

Stack: 

Website URL: 

GitHub: 

Todo:

- every word's frequency
- percentage of difference between two text files

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

__Canceled because illigal according the the article 4.3 of the [Standard Terms and Conditions of Use](https://agbserver.gameforge.com/enGB-Terms-2014-OGame.html)__

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

**Database structure:**

*cards:* 

```
id, int auto-increament pk
front, text not null
back, text not null
```

*decks:*

```
id, int auto-increament pk
name, text not null
```

*deck_lists:* index for efficient search

```
deck_id, int fk decks.id 
card_id, int fk cards.id
```

*card_reviews:*

```
card_id, int fk cards.id
last_seen, date year-month-day
days_before_review, int default 0
```

**Review Logic:**

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

### Bro2Bro

*Browser to browser chat. No server. No surveillance.*

Stack: WebRTC, BugOut.js

Website:

GitHub:

Todo:

- [ ] create app with bugoutjs

### Obot

_A chess like game played by bots!_

Obot is a chess like strategy game where players' bots are confronting each other. Of course, you could choose to play it manually, but it's not advised!

The game: 2 players on a 9x9 grid. Each player starts with a king, if the king is taken, the player with a king left wins. Turns are simultanious (each player decides of a move and resolve it at the same time). Kings start on rank 2 file 5 and rank 7 file 5. King can ether move one square in any direction or spawn a pawn. Pawns move one square in any direction. All peaces move (or for the kings, spawn pawns) at the same time. Both players can see every peaces at all time. No check, no draw, no checkmate, players have to take the opponent's king to win the game. A peace takes another by moving on a square occupied by an enemy peace.

Stack:

Website:

GitHub:

Todo:

- [ ] figure out the precise rules
- [ ] figure out rules of bot making
- [ ] do cli tool
- [ ] setup website

### Bible Projects

Ideas to transcribe, translate and print Bibles.

Publish those ideas on `conceptbible.org`

#### Flowing Word Bible

_A KJV Bible without chapter number, verse number or page number. Simply the pure flowing word of God._

Stack:

Website:

GitHub:

Todo:

- [ ] get bible kjv csv
- [ ] only keep the verses and book names
- [ ] edit pdf format A5
- [ ] manually add the _italic_ kjv words?

#### Corrected Basic English Bible

_The [Basic English Bible](https://www.biblestudytools.com/bbe/) corrected with the help of the KJV._

Stack:

Website:

GitHub:

Todo:

- [ ] get basic english Bible csv
- [ ] do a table of all the corrupted verses: verse, kjv, other translations
- [ ] correct all [corrupted verses](http://www.paulbenson.me/bible-corruption.html)
- [ ] edit pdf format A5

#### Toki Pona Bible

_The word of God in Toki Pona_

AI generated translation of the Holy Bible based on the Corrected Basic English Bible.

Stack:

Website:

GitHub:

Todo:

- [ ] Ask for the ML model from [ante toki](https://www.reddit.com/r/tokipona/comments/dzw30c/english_to_toki_pona_translation_with_neural/) or train one myself on [Tatoeba examples](https://tatoeba.org/eng/sentences/search?query=light&from=eng&to=toki).
- [ ] make sure the translation is [correct toki pona](https://jan-lope.github.io/Toki_Pona_lessons_English/)
- [ ] do a version with latin alphabet
- [ ] do a version with sitelen pona script
- [ ] do pdf A5

#### DScript Bible

_A KJV Bible using [DScript](http://dscript.org/)_

Stack:

Website:

GitHub:

Todo:

- [ ] Find/Do a Dscript simple font (linear, no glyphs)
- [ ] Parse all the text to modify the script (do chapters horizontal and verses vertical)
- [ ] edit A5 pdf

#### OST

_Bring the word of God to the terminal in the french Ostervald version._

Stack:

Website:

GitHub:

Todo:

- [ ] get Osterval version csv
- [ ] parse the csv
- [ ] update script to ignore accentuated letters

#### Olivetan Bible

_AI generated transcription of the [Olivetan Bible](https://gallica.bnf.fr/ark:/12148/bpt6k1040534s.r=olivetan?rk=21459;2)_

Stack: [Transkribus](https://transkribus.eu/Transkribus/)

Website:

GitHub:

Todo:

- [ ] Train ML model starting with the book of Apocalypse to compare it to the printed version
- [ ] Start with the New Testament
- [ ] transcribe the Old Testament
- [ ] publish it A5 pdf format

## Todo

- [ ] remake website layout
- [ ] split code into separate components
- [ ] update favicon with all sizes
