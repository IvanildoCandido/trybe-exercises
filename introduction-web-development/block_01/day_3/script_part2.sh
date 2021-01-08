#!/bin/bash
# Exercise 1
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
# Exercise 2
cat countries.txt
# Exercise 3
less countries.txt
# Ou 
more countries.txt
# Exercise 4
less countries.txt
# Dentro do arquivo digitar /Zambia
# Exercise 5
grep Brazil countries.txt
# Exercise 6
grep -i brazil countries.txt
## Criar Arquivo phrases.txt 
echo -e "Agua mole e pedra dura tanto bate até que fura\nAntes tarde do que nunca\nQuem com o ferro fere com o mesmo ferro será ferido\nAntes só que mal acompanhado" > phrases.txt
# Exercise 7
grep -v fox phrases.txt
# Exercise 8
wc -w phrases.txt
# Exercise 9
wc -l phrases.txt
# Exercise 10
touch empty.tbt
touch empty.pdf
# Exercise 11
ls -l
# Exercise 12
ls -l *txt
# Exercise 13
ls -l *t?t 
# Exercise 14
man ls

