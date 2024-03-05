from discord.ext import commands, tasks
import discord
from discord import Color

intents = discord.Intents.all()  # allowing all intents
intents.members = True

bot = commands.Bot(command_prefix="!", help_command=None, intents=intents)  # Creating our bot


@bot.event
async def on_ready():
    try:  # If bot can connect to the discord

        print('Discord bot succesfully connected')
    except:
        print("[!] Couldn't connect, an Error occured")
