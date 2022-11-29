import os
result = open("dirList.html", 'w')

def getDir(dirSource, nest):
  if(nest == 0):
    result.write("<ul id=\"myUL\">")
  else:
    result.write("<ul class=\"nested\">")
  nest = nest + 1
  entries = os.listdir(dirSource)
  entries.sort()
  for file in entries:
    if(not file[0] == '.'):
      dirNew = os.path.join(dirSource, file)
      if(not os.path.isfile(dirNew)):
        result.write("<li><span class=\"caret\">" + file + "</span>\n")
        getDir(dirNew, nest)
        result.write("</li>")
      else:
        split = os.path.splitext(file)
        if(split[1] == ".md"):
          result.write("<li><a class=\"mdfile\" href=\"#" + split[0] + "\" path=\"" + dirNew + "\">" + split[0] + "</a></li>\n")
  result.write("</ul>\n")

getDir('Cours', 0)
result.close()
