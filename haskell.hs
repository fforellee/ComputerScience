import Data.List

func n
  | n == 0 = 1
  | otherwise = n * 2

fac n  = aux n 1
  where
    aux n acc
      | n <= 1 = acc
      | otherwise = aux (n-1) (n*acc)
asc :: Int -> Int -> [Int]

asc n m
  | m < n = []
  | m == n = [m]
  | m > n = n : asc (n+1) m


