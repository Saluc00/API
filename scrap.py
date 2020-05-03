import requests
import csv
from bs4 import BeautifulSoup
import sqlite3

All = []

# ======================================================================
#
#                 Création des variables de gestion de BDD
#
# ======================================================================

conn = sqlite3.connect('run.db')
cursor = conn.cursor()

cursor.execute('drop table games;')
cursor.execute('drop table users;')
cursor.execute('drop table runs;')
conn.commit()

cursor.execute('CREATE TABLE games (id INTEGER  PRIMARY KEY AUTOINCREMENT, name text);')
cursor.execute('CREATE TABLE users (id INTEGER  PRIMARY KEY AUTOINCREMENT, name text);')
cursor.execute('CREATE TABLE runs (id INTEGER  PRIMARY KEY AUTOINCREMENT, rank text, time text, verified text, plateform text, date text, fk_playerID integer, fk_gameID integer, FOREIGN KEY(fk_playerID) REFERENCES player(id), FOREIGN KEY(fk_gameID) REFERENCES game(id));')
conn.commit()

def getText(txt):
       return txt.get_text()

class Player:
       def __init__(self,rank,name,time,verified,plateform,date):
              self.rank = rank
              self.name = name
              self.time = time
              self.verified = verified
              self.plateform = plateform
              self.date = date

class Page:
       def __init__(self, href, nomJeu):
              self.href = href
              self.nomJeu = nomJeu

# req2 = requests.get(f"https://www.speedrun.com/ajax_leaderboard.php?game={href}&verified=1&category=62939&platform=&variable18835=&loadtimes=2&video=&obsolete=&date=").text
# Recupere les donnée de Mario 64
# soup2 = BeautifulSoup(req2, 'html.parser').find_all(attrs={'class': 'linked'})
# for player in soup2:
#        p = player.find_all('td')
#        All.append(Player(getText(p[0]), getText(p[1]), getText(p[2]), getText(p[3]), getText(p[4]), getText(p[5])))

req = requests.get("https://www.speedrun.com/ajax_games.php?game=mario&platform=&unofficial=off&orderby=oldest&title=&series=&start=0").text
soup = BeautifulSoup(req, 'html.parser').find_all(attrs={'class': 'listcell'})
for div in soup:
       href = div.find('a').get('href').replace('/', '')
       req2 = requests.get(f"https://www.speedrun.com/ajax_leaderboard.php?game={href}&verified=1&category=62939&platform=&variable18835=&loadtimes=2&video=&obsolete=&date=").text
       soup2 = BeautifulSoup(req2, 'html.parser').find_all(attrs={'class': 'linked'})
       cursor.execute(f'insert into games (name) values ("{href}")')
       conn.commit()
       idGame = cursor.execute(f'select id from games where name = "{href}"').fetchall()[0][0]
       for run in soup2:
              p = run.find_all('td')
              rank, name, time, verified, plateform, date = getText(p[0]), getText(p[1]), getText(p[2]), getText(p[3]), getText(p[4]), getText(p[5])
              if name not in cursor.execute('select name from users').fetchall():
                     cursor.execute(f'insert into users (name) values ("{name}")')
                     conn.commit()
                     idPlayer = cursor.execute(f'select id from users where name = "{name}"').fetchall()[0][0]
              else:
                     idPlayer = cursor.execute(f'select id from users where name = "{name}"').fetchall()[0][0]
              
              cursor.execute(f'insert into runs (rank, time, verified, plateform, date, fk_playerID, fk_gameID) values ("{rank}", "{time}", "{verified}", "{plateform}", "{date}", "{idPlayer}", "{idGame}")')
              conn.commit()
              All.append(Player(getText(p[0]), getText(p[1]), getText(p[2]), getText(p[3]), getText(p[4]), getText(p[5])))
