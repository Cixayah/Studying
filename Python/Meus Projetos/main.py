import os
import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix='/' , intents=intents)
my_secret = os.environ['DISCORD_TOKEN']


@bot.command(name='teste')
async def inverse (ctx, message):
  await ctx.send(message[::-1])

@bot.command(name='soma')
async def soma(ctx, num1: int, num2: int):
    result = num1 + num2
    await ctx.send(f'A soma é: {result}')
  
@bot.command(name='subtracao')
async def subtracao(ctx, num1: int, num2: int):
    result = num1 - num2
    await ctx.send(f'A subtração é: {result}')


bot.run(my_secret)
