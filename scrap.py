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

cursor.execute('create table test (id INTEGER PRIMARY KEY AUTOINCREMENT, name text)')
cursor.execute('insert into test (name) values ("test")')
conn.commit()

# def getText(txt):
#        return txt.get_text()

# class Player:
#        def __init__(self,rank,name,time,verified,plateform,date):
#               self.rank = rank
#               self.name = name
#               self.time = time
#               self.verified = verified
#               self.plateform = plateform
#               self.date = date

# class Page:
#        def __init__(self, href, nomJeu):
#               self.href = href
#               self.nomJeu = nomJeu
# # req2 = requests.get(f"https://www.speedrun.com/ajax_leaderboard.php?game={href}&verified=1&category=62939&platform=&variable18835=&loadtimes=2&video=&obsolete=&date=").text
# # Recupere les donnée de Mario 64
# # soup2 = BeautifulSoup(req2, 'html.parser').find_all(attrs={'class': 'linked'})
# # for player in soup2:
# #        p = player.find_all('td')
# #        All.append(Player(getText(p[0]), getText(p[1]), getText(p[2]), getText(p[3]), getText(p[4]), getText(p[5])))

# req = requests.get("https://www.speedrun.com/ajax_games.php?game=mario&platform=&unofficial=off&orderby=oldest&title=&series=&start=0").text
# soup = BeautifulSoup(req, 'html.parser').find_all(attrs={'class': 'listcell'})
# for div in soup:
#        href = div.find('a').get('href').replace('/', '')
#        req2 = requests.get(f"https://www.speedrun.com/ajax_leaderboard.php?game={href}&verified=1&category=62939&platform=&variable18835=&loadtimes=2&video=&obsolete=&date=").text
#        soup2 = BeautifulSoup(req2, 'html.parser').find_all(attrs={'class': 'linked'})
#        for player in soup2:
#               p = player.find_all('td')
#               All.append(Player(getText(p[0]), getText(p[1]), getText(p[2]), getText(p[3]), getText(p[4]), getText(p[5])))

# print(All)
