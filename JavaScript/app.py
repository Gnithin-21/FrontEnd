l=list(map(int,input('Enter list items').split))
ln=len(l)
for i in range(0,ln-1):
    for j in range(i+1,ln):
        if l[i]>l[j]:
            l[i],l[j]=l[j],l[i]
            \end{code}
            \end{itemize}
            \item \textbf{Solution:} The code provided is a simple implementation of the Bubbl
sort algorithm. However, there are several issues with the code:
\begin{itemize}
