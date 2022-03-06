# Nicholas Hughes Tic Tac Toe
# December 07th, 2021 - 2:10am

def ptBoard(board): # prints the board
    print("")
    for x in board:
        print(x)

    return None

def tictactoe(turn, change, board, replace, mBoard): # changes the board
    change = int(change)

    for x in range(len(replace)): # for length in replace; replaces X or O with user input.
        if change == replace[x][0]:
            if change == 1 or change == 2 or change == 3:
                board[0] = board[0].replace(str(change), "X" if turn == 1 else "O")
                mBoard[0] = mBoard[0].replace(str(change), "X" if turn == 1 else "O")
                del replace[x]
                break
            elif change == 4 or change == 5 or change == 6:
                board[2] = board[2].replace(str(change), "X" if turn == 1 else "O")
                mBoard[1] = mBoard[1].replace(str(change), "X" if turn == 1 else "O")
                del replace[x]
                break
            elif change == 7 or change == 8 or change == 9:
                board[4] = board[4].replace(str(change), "X" if turn == 1 else "O")
                mBoard[2] = mBoard[2].replace(str(change), "X" if turn == 1 else "O")
                del replace[x]
                break
            else:
                None
            
    return board, replace, mBoard

def userInput(replace, turn): # asks the user for input and checks if it's vaild
    for x in range (1):
        temp = "O" if turn == 1 else "X"
        change = input("\nPlayer " + temp + " Enter Number: ")

        if change == "exit":
            exit()

        try: # changes to int; error if not
            change = int(change)
        except ValueError:
            print("Error, enter an integer from 1-9!")
            continue

        count = 0
        for x in replace:
            if int(x[0]) != change:
                count = count + 1
            else:
                None
        if count == len(replace):
            print("Error, can't place marker there try again!")
        else:
            return False, change
    return True, change

def boardCheck(mBoard, turn):
    temp = "X" if turn == 1 else "O"

    # Checks rows
    for row in mBoard:
        if len(set(row)) == 1:
            print("\nPlayer",temp,"has won the game!")
            return 0

    # Checks cols
    for col in range(len(mBoard)):
        if len(set(mBoard[0][col] + mBoard[1][col] + mBoard[2][col])) == 1:
            print("\nPlayer", temp, "has won the game!")
            return 0

    # Checks daignole
    if len(set(mBoard[0][0] + mBoard[1][1] + mBoard[2][2])) == 1:
        print("\nPlayer", temp, "has won the game!")
        return 0
    elif len(set(mBoard[0][2] + mBoard[1][1] + mBoard[2][0])) == 1:
        print("\nPlayer", temp, "has won the game!")
        return 0
    else:
        return 1

def main():
    answer = "Y" # reset value
    while answer == "Y":
        print("       Tic Tac Toe    ")
        board = [("   1   |   2   |   3   "),
                 ("-----------------------"),
                 ("   4   |   5   |   6   "),
                 ("-----------------------"),
                 ("   7   |   8   |   9   ")] # holds the visual board

        mBoard = [("123"),("456"),("789")] # holds the math board

        replace = [
            [1,3],[2,11],[3,19],
            [4,3],[5,11],[6,19],
            [7,3],[8,11],[9,19]] # holds the board places

        turn = 2 # holds which player's turn it is

        ptBoard(board)
        while len(replace) != 0:
            con = True
            while con == True:
                con, change = userInput(replace,turn)

            turn = 2 if turn == 1 else 1
            board, replace, mBoard = tictactoe(turn, change, board, replace, mBoard)
            ptBoard(board)
            exitCode = boardCheck(mBoard, turn)
            if exitCode == 0:
                break

        if len(replace) == 0 and exitCode == 1:
            print("It's a Draw!")

        answer = input("Play Again? (Y/N): ").capitalize()
    return 0

if __name__ == '__main__':
    main()