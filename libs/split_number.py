def split_number(num, pre:str = None) -> str:
    num = str(num)
    length = len(num)
    new_num = ''

    if len(num) <= 3:
        return num
    
    for index, string in enumerate(num[::-1]):
        if (index + 1) % 3 == 0 and length - index >= 2:
            new_num += string + ' '

        else:
            new_num += string

    if new_num.startswith('000') and isinstance(pre, str):
        new_num = new_num.replace('000', pre[::-1], 1)
    
    return new_num[::-1]