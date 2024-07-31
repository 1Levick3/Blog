
import wordmoves from "./word_moves.jpg"
import linemoves from "./line_moves.jpg"
import textobjects from "./textobjects.png"
import rectb from "./rectangular-blocks.gif"
import completion from "./completion.gif"
import macros from "./macros.gif"
import autoindent from "./autoindent.gif"
import append from "./append.gif"
import split from "./split.gif"
import vimb from "./vimB.png"
const LearnVim=()=>{

    return (
        <div>
            <h5>24 December 2023</h5>
            <h1>Beginner guide to vim</h1>
            <p></p>
            <p><img src={vimb} alt="vimb" style={{ width: '100%', borderRadius: '25px' }} /></p>
            <p>
            tl;dr: You want to teach yourself vim (the best text editor known to human kind) in the fastest way possible. This is my way of doing it. You start by learning the minimal to survive, then you integrate all the tricks slowly.
            </p>
            <p></p>
            <p>
            Learn vim and it will be your last text editor. There isn’t any better text editor that I know of. It is hard to learn, but incredible to use. 
            </p>
            <p>
            I suggest you teach yourself Vim in 4 steps:
            </p>
            <ol>
            <li>Survive</li>
            <li>Feel comfortable</li>
            <li>Feel Better, Stronger, Faster</li>
            <li>Use superpowers of vim</li>
            </ol>
            <p>By the end of this journey, you will become a vim superstar.</p>
            <p>But before we start, just a warning. Learning vim will be painful at first. It will take time. It will be a lot like playing a musical instrument. Don’t expect to be more efficient with vim than with another editor in less than 3 days. In fact it will certainly take 2 weeks instead of 3 days. I was introduced to vim by my ex collegue at Cambium Networks and boy it took me a month to get fluid with this editor.</p>

            <h3>1st level - Survive</h3>
            <p></p>
            <ol>
            <li>Install <a href="https://www.vim.org/" target="_blank">vim</a></li>
            <li>Launch vim</li>
            <li>DO NOTHING! Read</li>
            </ol>
            <p>
            In a standard editor, typing on the keyboard is enough to write something and see it on the screen. Not this time. Vim is in <i>Normal</i> mode. Let’s go to <i>Insert</i> mode. Type the letter <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>  i</mark>.
            </p>
            <p>
            You should feel a bit better. You can type letters like in a standard editor. To get back to <i>Normal</i> mode just press the <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>ESC</mark> key.
            </p>
            <p>
            You now know how to switch between <i>Insert</i> and <i>Normal</i> mode. And now, here are the commands that you need in order to survive in <i>Normal</i> mode:
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>i</mark> → Insert mode. Type <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>ESC</mark> to return to Normal mode.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>x</mark> → Delete the char under the cursor</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:wq</mark> → Save and Quit (<mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:w</mark> save, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:q</mark> quit)</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>dd</mark> → Delete (and copy) the current line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>p</mark> → Paste</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>hjkl</mark> → basic cursor move (←↓↑→). Hint: j looks like a down arrow.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:help &lt;command&gt;</mark> → Show help about <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;command&gt;</mark>. You can use <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:help</mark> without a <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;command&gt;</mark> to get general help.</li>
            </ul>
            </p>
            <p>
            Only 5 commands. That is all you need to get started. Once these command start to become natural (maybe after a day or so), you should move on to level 2.
            </p>
            <p>
            But first, just a little remark about <i>Normal mode</i>. In standard editors, to copy you have to use the <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>Ctrl</mark> key (<mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>Ctrl-c</mark> generally). In fact, when you press <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>Ctrl</mark>, it is as if all of your keys change meaning. Using vim in normal mode is a bit like having the editor automatically press the <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>Ctrl</mark> key for you.
            </p>
            <p>
            A last word about notations:
            <ul>
            <li>instead of writing <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>Ctrl-λ</mark>, I’ll write <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-λ&gt;</mark>.</li>
            <li>commands starting with <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:</mark> end with <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;enter&gt;</mark>. For example, when I write <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:q</mark>, I mean <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:q&lt;enter&gt;</mark>.</li>
            </ul>
            </p>
            <h3>2nd Level – Feel comfortable</h3>
            <p></p>
            <p>
            You know the commands required for survival. It’s time to learn a few more commands. These are my suggestions:
            </p>
            <ol>
            <li>Insert mode variations:</li>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>a</mark> → insert after the cursor</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>o</mark> → insert a new line after the current one</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>O</mark> → insert a new line before the current one</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>cw</mark> → replace from the cursor to the end of the word</li>
            </ul>
            <li>Basic moves</li>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>0</mark> → go to the first column</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>^</mark> → go to the first non-blank character of the line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>$</mark> → go to the end of line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>g_</mark> → go to the last non-blank character of line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>/pattern</mark> → search for <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>pattern</mark></li>
            </ul>
            <li>Copy/Paste</li>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>P</mark> → paste before, remember <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>p</mark> is paste after current position.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>yy</mark> → copy the current line, easier but equivalent to <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>ddP</mark></li>
            </ul>
            <li>Undo/Redo</li>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>u</mark> → undo</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-r&gt;</mark> → redo</li>
            </ul>
            <li>Load/Save/Quit/Change File (Buffer)</li>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:e &lt;path/to/file&gt;</mark> → open</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:w</mark> → save</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:saveas &lt;path/to/file&gt;</mark> → save to &lt;path/to/file&gt;</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:x</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>ZZ</mark> or <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:wq</mark> → save and quit (<mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:x</mark> only save if necessary)</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:q!</mark> → quit without saving, also: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:qa!</mark> to quit even if there are modified hidden buffers.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:bn</mark> (resp. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:bp</mark>) →  show next (resp. previous) file (buffer)</li>
            </ul>
            </ol>
            <p>Take the time to learn all of these command. Once done, you should be able to do every thing you are able to do in other editors. You may still feel a bit awkward. But follow me to the next level and you’ll see why vim is worth the extra work.</p>
            <h3>3rd Level – Better. Stronger. Faster.</h3>
            <p></p>
            <p>Congratulation for reaching this far! Now we can start with the interesting stuff. At level 3, we’ll only talk about commands which are compatible with the old vi editor.</p>
            <p></p>
            <h4>Better</h4>
            <p>Let’s look at how vim could help you to repeat yourself:</p>
            <ol>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>.</mark> → (dot) will repeat the last command,</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>N&lt;command&gt;</mark> → will repeat the command N times.</li>
            </ol>
            <p>
            Some examples, open a file and type:
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>2dd</mark> → will delete 2 lines</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>3p</mark> → will paste the text 3 times</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>100idesu [ESC]</mark> → will write “desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu desu”</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>.</mark> → Just after the last command will write again the 100 “desu”.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>3.</mark> → Will write 3 “desu” (and not 300, how clever).</li>
            </ul>
            </p>
            <h4>Stronger</h4>
            <p>Knowing how to move efficiently with vim is very important. Don’t skip this section.</p>
            <ol>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>NG  </mark> → Go to line N</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>gg  </mark> → shortcut for 1G - go to the start of the file</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>G  </mark> → Go to last line</li>
            <li>Word moves:</li>
                <ol>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>w  </mark> → go to the start of the following word,</li>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>e  </mark> → go to the end of this word.</li>
                </ol>
                <p>By default, words are composed of letters and the underscore character. Let’s call a WORD a group of letter separated by blank characters. If you want to consider WORDS, then just use uppercase characters:</p>
                <ol>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>W  </mark> → go to the start of the following WORD,</li>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>E  </mark> → go to the end of this WORD.</li>
                </ol>
                <p><img src={wordmoves} alt="wordmoves" style={{ width: '60%' }} /></p>
            </ol>
            <p>Now let’s talk about very efficient moves:</p>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>%  </mark> :Go to the corresponding &#40; , &#123; , &#91; .</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>*  </mark>(resp. #) : go to next (resp. previous) occurrence of the word under the cursor</li>   
            </ul>
            <p>Believe me, the last three commands are gold.</p>
            <h4>Faster</h4>
            
            <p>Remember about the importance of vi moves? Here is the reason. Most commands can be used using the following general format:</p>
            <p><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;start position&gt;&lt;command&gt;&lt;end position&gt;</mark></p>
            
            <p>For example : <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>0y$</mark> means</p>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>0</mark> → go to the beginning of this line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>y</mark> → yank from here</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>$</mark> → up to the end of this line</li>
            </ul>
            
            <p>We also can do things like <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>ye</mark>, yank from here to the end of the word. But also <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>y2/foo</mark> yank up to the second occurrence of “foo”.</p>
            <p>But what was true for <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>y</mark> (yank), is also true for <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>d</mark> (delete), <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>v</mark> (visual select), <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>gU</mark> (uppercase), <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>gu</mark> (lowercase), etc…</p>
            <h3>4th Level – Vim Superpowers</h3>
            <p>With all preceding commands you should be comfortable using vim. But now, here are the killer features. Some of these features were the reason I started to use vim.</p>
            <h5>Move on current line: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>0</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>^</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>$</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>g_</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>f</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>F</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>t</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>T</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>,</mark> <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>;</mark></h5>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>0  </mark> → go to column 0</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>^  </mark> →  go to first character on the line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>$  </mark> → go to the last column</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>g_  </mark> → go to the last character on the line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>fa  </mark> → go to next occurrence of the letter <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>a</mark> on the line. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>,</mark> (resp. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>;</mark>) will find the next (resp. previous) occurrence.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>t,  </mark> → go to just before the character <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>,</mark>.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>3fa  </mark> → find the 3rd occurrence of <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>a</mark> on this line.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>F</mark> and <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>T</mark> →  like <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>f</mark> and <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>t</mark> but backward.</li>
            <p><img src={linemoves} alt="linemoves" style={{ width: '60%' }} /></p>
            </ul>
            <p>A useful tip is: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>dt&rdquo;</mark> → remove everything until the <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&rdquo;</mark>.</p>

            <h5>Zone selection <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;action&gt;a&lt;object&gt;</mark> or <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;action&gt;i&lt;object&gt;</mark></h5>
            <p>These command can only be used after an operator in visual mode. But they are very powerful. Their main pattern is:</p>

            <p><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;action&gt;a&lt;object&gt;</mark> or <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;action&gt;i&lt;object&gt;</mark></p>
            <p>Where action can be any action, for example, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>d</mark> (delete), <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>y</mark> (yank), <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>v</mark> (select in visual mode). The object can be: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>w</mark> a word, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>W</mark> a WORD (extended word), <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>s</mark> a sentence, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>p</mark> a paragraph. But also, natural character such as <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&#34;</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&#39;</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&rpar;</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&rcub;</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&rsqb;</mark>.</p>
            <p>Suppose the cursor is on the first <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>o</mark> of <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>(map (+) (&#34;foo&#34;))</mark>.</p>

            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>vi&#34;</mark> → will select foo.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>va&#34;</mark> → will select &#34;foo&#34;.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>vi&#41;</mark> → will select &#34;foo&#34;.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>va&#41;</mark> → will select &#40;&#34;foo&#34;&#41;.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>v2i&#41;</mark> → will select map (+) &#40;&#34;foo&#34;&#41;</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>v2a&#41;</mark> → will select &#40;map (+) &#40;&#34;foo&#34;&#41;&#41;</li>
            </ul>
            <p><img src={textobjects} alt="textobjexts" style={{ width: '60%' }} /></p>

            <h5>Select rectangular blocks: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-v&gt;</mark>.</h5>
            <p>Rectangular blocks are very useful for commenting many lines of code. Typically: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>0&lt;C-v&gt;</mark>  <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-d&gt;I-- [ESC]</mark></p>

            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>^</mark> → go to the first non-blank character of the line.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-v&gt;</mark> →  Start block selection.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-d&gt;</mark> → move down (could also be jjj or %, etc…).</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>I--[ESC]</mark> → write -- to comment each line.</li>
            </ul>
            <p><img src={rectb} alt="rectb" style={{ width: '60%' }} /></p>
            <p>Note: in Windows you might have to use <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-q&gt;</mark> instead of <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-v&gt;</mark> if your clipboard is not empty.</p>

            <h5>Completion: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-n&gt;</mark> and <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-p&gt;</mark>.</h5>
            <p>In Insert mode, just type the start of a word, then type <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-p&gt;</mark>, magic…</p>
            <p><img src={completion} alt="completion" style={{ width: '60%' }} /></p>
        
            <h5>Macros : <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>qa</mark> do something <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>q</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>@a</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>@@</mark></h5>
            <p><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>qa</mark> record your actions in the register <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>a</mark>. Then <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>@a</mark> will replay the macro saved into the register <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>a</mark> as if you typed it. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>@@</mark> is a shortcut to replay the last executed macro.</p>
            <p><i>Example</i></p>
            <p>On a line containing only the number 1, type this:</p>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>qaYp&lt;C-a&gt;q</mark> →</li>
                <ul>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>qa</mark>start recording.</li>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>Yp</mark>duplicate this line.</li>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-a&gt;</mark>increment the number.</li>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>q</mark>stop recording.</li>
                </ul>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>@a</mark> → write 2 under the 1</li>
                <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>@@</mark> →write 3 under the 2</li>
                <li>Now do <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>100@@</mark> will create a list of increasing numbers until 103.</li>
            </ul>
            <p><img src={macros} alt="macros" style={{ width: '60%' }} /></p>
            <h5>Visual selection: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>v</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>V</mark>, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-v&gt;</mark></h5>
            <p>We saw an example with <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-v&gt;</mark>. There is also <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>v</mark> and <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>V</mark>. Once the selection has been made, you can:</p>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>J</mark>→ join all the lines together.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;</mark>(resp. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&gt;</mark>) → indent to the left (resp. to the right).</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>=</mark> → auto indent</li>
            </ul>
            <p><img src={autoindent} alt="autoindent" style={{ width: '60%' }} /></p>
            <p>Add something at the end of all visually selected lines:</p>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-v&gt;</mark></li>
            <li>go to desired line &#40;<mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>jjj</mark> or <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-d&gt;</mark> or <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>/pattern</mark> or <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>%</mark> etc...&#41;</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>$</mark> go to the end of the line</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>A</mark>write text, <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>ESC</mark>.</li>
            </ul>
            <p><img src={append} alt="append" style={{ width: '60%' }} /></p>

            <h5>Splits: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:split</mark> and <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>vsplit</mark>.</h5>
            <p>These are the most important commands, but you should look at <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:help split</mark>.</p>
            <ul>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:split</mark>→ create a split (<mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:vsplit</mark>create a vertical split)</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-w&gt;&lt;dir&gt;</mark> : where dir is any of<mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>hjkl</mark>)  or ←↓↑→ to change the split.</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-w&gt;_</mark> (resp. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-w&gt;|</mark>) : maximise the size of the split (resp. vertical split)</li>
            <li><mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-w&gt;+</mark> (resp. <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>&lt;C-w&gt;-</mark>) : Grow (resp. shrink) split</li>
            </ul>
            <p><img src={split} alt="split" style={{ width: '60%' }} /></p>

            <h3>Conclusion</h3>
            <p>That was 90% of the commands I use every day. I suggest that you learn no more than one or two new commands per day. After two to three weeks you’ll start to feel the power of vim in your hands.</p>
            <p>Learning Vim is more a matter of training than plain memorization. Fortunately vim comes with some very good tools and excellent documentation. Run vimtutor until you are familiar with most basic commands. Also, you should read this page carefully: <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>:help usr_02.txt</mark>.</p>
            <p>Then, you will learn about <mark style={{color:'#B3B9C5', backgroundColor:'#3B4252', paddingLeft: '8px', paddingRight:'8px', paddingTop:'0px', paddingBottom:'0px'}}>!</mark>, folds, registers, plugins and many other features. Learn vim like you’d learn piano and all should be fine.</p>
        </div>
      );

}
export default LearnVim;