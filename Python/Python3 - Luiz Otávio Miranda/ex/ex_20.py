first_value = input('Enter the first value: ')
second_value = input('Enter the second value: ')

if first_value == second_value:
    print(f'The values are equal: {first_value} and {second_value}')
elif first_value > second_value:
    print(f'The first value ({first_value}) is greater than the second value ({second_value})')
else:
    print(f'The second value ({second_value}) is greater than the first value ({first_value})')
