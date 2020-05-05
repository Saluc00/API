import requests
import csv
from bs4 import BeautifulSoup
import sqlite3

All = []

conn = sqlite3.connect('run.db')
cursor = conn.cursor()

cursor.execute('drop table games;')
cursor.execute('drop table users;')
cursor.execute('drop table runs;')
conn.commit()

cursor.execute(
    'CREATE TABLE games (id INTEGER  PRIMARY KEY AUTOINCREMENT, name text);')
cursor.execute(
    'CREATE TABLE users (id INTEGER  PRIMARY KEY AUTOINCREMENT, name text);')
cursor.execute('CREATE TABLE runs (id INTEGER  PRIMARY KEY AUTOINCREMENT, rank text, time text, verified text, plateform text, date text, fk_playerID integer, fk_gameID integer, FOREIGN KEY(fk_playerID) REFERENCES player(id), FOREIGN KEY(fk_gameID) REFERENCES game(id));')
conn.commit()


def getText(txt):
    return txt.get_text()


class Player:
    def __init__(self, rank, name, time, verified, plateform, date):
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


req = requests.get(
    "https://www.speedrun.com/ajax_games.php?game=mario&platform=&unofficial=off&orderby=oldest&title=&series=&start=0").text
soup = BeautifulSoup(req, 'html.parser').find_all(attrs={'class': 'listcell'})
for div in soup:
    href = div.find('a').get('href').replace('/', '')
    lien = "https://www.speedrun.com/ajax_leaderboard.php?game=" + href + \
        "&verified=1&category=62939&platform=&variable18835=&loadtimes=2&video=&obsolete=&date="
    req2 = requests.get(lien).text
    soup2 = BeautifulSoup(req2, 'html.parser').find_all(
        attrs={'class': 'linked'})
    cursor.execute('insert into games (name) values ("' + href + '")')
    conn.commit()
    idGame = cursor.execute(
        'select id from games where name = "' + href + '"').fetchall()[0][0]
    for run in soup2:
        p = run.find_all('td')      
        rank, name, time, verified, plateform, date = getText(p[0]), getText(
            p[1]), getText(p[2]), getText(p[4]), getText(p[5]), getText(p[6])
        if name not in cursor.execute('select name from users').fetchall():
            cursor.execute('insert into users (name) values ("' + name + '")')
            conn.commit()
            idPlayer = cursor.execute(
                'select id from users where name = "' + name + '"').fetchall()[0][0]
        if (bytes(name),) in cursor.execute('select name from users').fetchall():
            idPlayer = cursor.execute(
                'select id from users where name = "' + name + '"').fetchall()[0][0]
            cursor.execute(
                'insert into runs (rank, time, verified, plateform, date, fk_playerID, fk_gameID) values ("' + str(rank) + '", "' + str(time) + '", "' + str(verified) + '", "' + str(plateform) + '", "' + str(date) + '", "' + str(idPlayer) + '", "' + str(idGame) + '")')
            conn.commit()
            All.append(Player(getText(p[0]), getText(p[1]), getText(
                p[2]), getText(p[4]), getText(p[5]), getText(p[6])))

print('====================== Script fini ======================')