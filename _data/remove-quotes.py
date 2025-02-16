# Python script to remove quotation marks from the first line of a CSV file

# Specify the file name
file_name = "sources.csv"

# Read the content of the file
with open(file_name, 'r') as file:
    lines = file.readlines()

# Remove quotation marks from the first line only
if lines:
    lines[0] = lines[0].replace('"', '')

# Write back to the same file
with open(file_name, 'w') as file:
    file.writelines(lines)

print("Quotation marks removed from the first line of", file_name)