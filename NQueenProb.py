global N 
N = 4
  
def printAnswer(game): 
    for i in range(N): 
        for j in range(N): 
            print (game[i][j], end = " ") 
        print() 
def safe(game, row, col): 
  
    for i in range(col): 
        if game[row][i] == 1: 
            return False
  
    for i, j in zip(range(row, -1, -1),  
                    range(col, -1, -1)): 
        if game[i][j] == 1: 
            return False
  
    for i, j in zip(range(row, N, 1),  
                    range(col, -1, -1)): 
        if game[i][j] == 1: 
            return False
  
    return True
  
def solutionUtil(game, col): 

    if col >= N: 
        return True
 
    for i in range(N): 
  
        if safe(game, i, col): 
              
            game[i][col] = 1
  
            if solutionUtil(game, col + 1) == True: 
                return True
  
 
            game[i][col] = 0
  
  
    return False

def solveIT(): 
    game = [ [0, 0, 0, 0], 
              [0, 0, 0, 0], 
              [0, 0, 0, 0], 
              [0, 0, 0, 0] ] 
  
    if solutionUtil(game, 0) == False: 
        print ("Solution does not exist") 
        return False
  
    printAnswer(game) 
    return True
  
solveIT() 