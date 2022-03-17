import Data.List

asc :: Int -> Int -> [Int]
asc n m
  | m < n  = []
  | m == n = [m]
  | m > n  = n : asc (n+1) m

