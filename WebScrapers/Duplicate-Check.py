



entries = []
duplicate_entries = []
with open('WebScrapers/testing-sites.csv', 'r') as my_file:
    for line in my_file:
        columns = line.strip().split(',')
        if columns[11] not in entries:
            entries.append(columns[11])
        else:
            duplicate_entries.append(columns[11]) 
for i in duplicate_entries:
    print(i)
if len(duplicate_entries) > 0:
    with open('WebScrapers/duplicates.csv', 'w') as out_file:
        with open('WebScrapers/testing-sites.csv', 'r') as my_file:
            for lines in my_file:
                columns = lines.strip().split(',')
                if columns[11] in duplicate_entries:
                    out_file.write(line)
else:
    print("No repetitions")