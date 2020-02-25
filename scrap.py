import requests
import csv
from bs4 import BeautifulSoup
import sqlite3

All = []
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

req = requests.get("https://www.speedrun.com/ajax_leaderboard.php?variable5138=16457&game=sm64&verified=1&category=2409&region=&platform=&variable19022").text
soup = BeautifulSoup(req, 'html.parser').find_all(attrs={'class': 'linked'})
for player in soup:
       p = player.find_all('td')
       All.append(Player(getText(p[0]), getText(p[1]), getText(p[2]), getText(p[3]), getText(p[4]), getText(p[5])))

print(All[2].time)
