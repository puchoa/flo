import json

# Run script with the command python datalistHtml.py
# Note - If you are gonna redo a Sorted.txt file make sure you delete that file first
# If not this script will add onto that file

# Put the name of the json file here with out .json
fileName = 'black'



# Opens the file and is stored in data
# Gets the array atletas and sorts them by name
with open('names/' + fileName + '.json') as f:
    data = json.load(f)
    data = data['atletas']
    data = sorted(data, key = lambda i: i['atleta'])


# Creates and opens new file with filename.Sorted.txt
s = open('names/' + fileName + "Sorted.txt", 'a')


s.write("<datalist id= \"" + fileName + "\">\n")

# Goes through the json and pulls out the name and id of the player
# If the name has a ' then gets changed to \' 
# Writes the output to the new file
for i in range(len(data)):
    id = data[i]['id']
    name = data[i]['atleta']

    if "'" in name:
        name = name.replace("'", "\\'")

    output = "\t<option id=" + str(id) + " value=\"" + unicode(name).encode('utf8') + "\"></option>\n"
    s.write(output)


s.write("</datalist>")
s.close()



