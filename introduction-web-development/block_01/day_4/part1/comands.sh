#!/bin/bash
# Exercise 1
cd ./part1
mkdir unix_tests
cd unix_tests
# Exercise 2
echo -e "Internet\nUnix\nBash" > skills2.txt 
# Exercise 3
echo "JavaScript\nNode\nReact\nGitHub\nCSS" >> ./part1/unix_tests/skills2.txt
# Exercise 4
cat ./part1/unix_tests/skills2.txt | wc -l
# Exercise 5
sort ./part1/unix_tests/skills2.txt | head -n 3 > ./part1/unix_tests/top_skills.txt
# Exercise 6
echo "A vida é bela\nDeus existe\nSó sei que nada sei" > ./part1/unix_tests/phrases2.txt
# Exercise 7
grep br ./part1/unix_tests/phrases2.txt | wc -l
# Exercise 8
grep -v br ./part1/unix_tests/phrases2.txt | wc -l
# Exercise 9
echo "Brazil\nArgentina" >> ./part1/unix_tests/phrases2.txt
# Exercise 10
curl -o ./part1/unix_tests/countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
cp ./part1/unix_tests/countries.txt ./part1/unix_tests/bunch_of_things.txt
cat ./part1/unix_tests/phrases2.txt >> ./part1/unix_tests/bunch_of_things.txt
# Exercise 11
sort ./part1/unix_tests/bunch_of_things.txt -o ./part1/unix_tests/bunch_of_things.txt