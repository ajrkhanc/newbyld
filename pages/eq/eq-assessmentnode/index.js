import Head from 'next/head'

export default function BrowseCourses() {

    const submitF = async (event) => {
        event.preventDefault();
        document.getElementById("submitbuttonform").value = "Submitting";

        var q1 = event.target.q1.value;
        var q2 = event.target.q2.value;
        var q3 = event.target.q3.value;
        var q4 = event.target.q4.value;
        var q5 = event.target.q5.value;
        var q6 = event.target.q6.value;
        var q7 = event.target.q7.value;
        var q8 = event.target.q8.value;
        var q9 = event.target.q9.value;
        var q10 = event.target.q10.value;
        var q11 = event.target.q11.value;
        var q12 = event.target.q12.value;
        var q13 = event.target.q13.value;
        var q14 = event.target.q14.value;
        var q15 = event.target.q15.value;
        var q16 = event.target.q16.value;
        var q17 = event.target.q17.value;
        var q18 = event.target.q18.value;
        var q19 = event.target.q19.value;
        var q20 = event.target.q20.value;



        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const organization = event.target.organization.value;
        var nameurl = name.replace(/[^a-zA-Z0-9 ]/g, "");
        nameurl = nameurl.toLowerCase();
        const newnameurl = nameurl.split(' ').join('-')+phone;
        var foremail = 'https://byldgroup.com/eq/eq-assessment2/'+newnameurl;



        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://byldblogs.vercel.app/api/dtci-assessment');       
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('q1=' + q1 +
            '&q2=' + q2 +
            '&q3=' + q3 +
            '&q4=' + q4 +
            '&q5=' + q5 +
            '&q6=' + q6 +
            '&q7=' + q7 +  
            '&q8=' + q8 +
            '&q9=' + q9 +
            '&q10=' + q10 +
            '&q11=' + q11 +
            '&q12=' + q12 +
            '&q13=' + q13 +
            '&q14=' + q14 +
            '&q15=' + q15 +
            '&q16=' + q16 +
            '&q17=' + q17 +
            '&q18=' + q18 +
            '&q19=' + q19 +
            '&q20=' + q20 +
            '&name=' + name +
            '&email=' + email +
            '&phone=' + phone +
            '&organization=' + organization +
            '&newnameurl=' + newnameurl
        );

        xhr.onreadystatechange = function () {

            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);

                document.getElementById("response").innerHTML = data.message;

                if (data.status == 0) {
                    var xhttp = xhr;
                    xhttp.open("Post", 'https://ajrkhan.xyz/byldgroup/wp-json/contact-form-7/v1/contact-forms/242/feedback');
                    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                    var Assessment = "EQ+ Assessment 2"
                    xhttp.send("name=" + event.target.name.value +
                        '&email=' + email +
                        '&phone=' + phone +
                        '&organization=' + organization +
                        '&foremailreport=' + foremail +
                        '&assessment=' + Assessment)

                    window.setTimeout(function () {
                        window.location.href = `/thank-you`
                    }, 1000);
                }

            }
            else {
                document.getElementById("response").innerHTML = "Fetching your result"
                setTimeout(function () {
                    document.getElementById("response").innerHTML = "";
                    document.getElementById("submitbuttonform").value = "Submit";
                }, 3000);
            }

        }



        xhr.onerror = function () {
            console.log('error');
        }
    };

    return (
        <>
            <Head>
                <title>EQ+ Assessment | BYLD Group</title>
                <meta name="description" content="Circle the number that best represents the extent to which you do the following" />
                {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-334NQCHLMD"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-334NQCHLMD');
          `,
                    }}
                /> */}
            </Head>

            <section className='assesmentbannnerbg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className='cacoh'>Nodejs Test</h2>
                            {/* <p>Select the number that best represents the extent to which you do the following (Use the line chart below as a guide.):</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='pbb-40'>
                <div className='container'>
                    <form onSubmit={submitF}>
                        <div className='row'>
                           
                            <div className='col-sm-12 mradio'>
                                <div className='fcol1'>
                                    <h2>
                                    Which of the following statement is correct?
                                    </h2>
                                  
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="1" id="q1a" required />
                                        <label for="q1a">js is Server Side Language.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="2" id="q1b" required />
                                        <label for="q1b">js is the Client Side Language.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="3" id="q1c" required />
                                        <label for="q1c">js is both Server Side and Client Side Language.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q1" value="4" id="q1d" required />
                                        <label for="q1d">None of the above.</label>
                                    </div>
                                  
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    What does the REPL stand for?
                                    </h2>
                              
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="1" id="q2a" required />
                                        <label for="q2a">REPL stands for "Read Eval Print Loop."</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="2" id="q2b" required />
                                        <label for="q2b">REPL stands for "Research Eval Program Learn."</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="3" id="q2c" required />
                                        <label for="q2c">REPL stands for "Read Earn Point Learn."</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q2" value="4" id="q2d" required />
                                        <label for="q2d">REPL stands for "Read Eval Point Loop."</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    A stream fires data event when there is data available to read. Is it true?
                                    </h2>
                                 
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="1" id="q3a" required />
                                        <label for="q3a">True</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q3" value="2" id="q3b" required />
                                        <label for="q3b">False</label>
                                    </div>
                                    
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    A stream fires finish event when all data has been flushed to the underlying system. Is it true?
                                    </h2>

                                    
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="1" id="q4a" required />
                                        <label for="q4a">True</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q4" value="2" id="q4b" required />
                                        <label for="q4b">False</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    The net.isIP(input) returns 0 for invalid input. Is it true?
                                    </h2>
                                    
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="1" id="q5a" required />
                                        <label for="q5a">True</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q5" value="2" id="q5b" required />
                                        <label for="q5b">False</label>
                                    </div>
                                   
                                </div>

                              

                                <div className='fcol1'>
                                    <h2>
                                    Node.js uses an event-driven, non-blocking I/O model. Is it true?
                                    </h2>
                                   
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="1" id="q6a" required />
                                        <label for="q6a">True</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q6" value="2" id="q6b" required />
                                        <label for="q6b">False</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Is the process a global object and can be accessed from anywhere?
                                    </h2>

                                   
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="1" id="q7a" required />
                                        <label for="q7a">True</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q7" value="2" id="q7b" required />
                                        <label for="q7b">False</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Is Node.js multithreaded?
                                    </h2>
                                 
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="1" id="q8a" required />
                                        <label for="q8a">Yes</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q8" value="2" id="q8b" required />
                                        <label for="q8b">No</label>
                                    </div>
                                  </div>
                                <div className='fcol1'>
                                    <h2>
                                    The buffer class is a global class that can be accessed without importing a buffer module.
                                    </h2>
                                   
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="1" id="q9a" required />
                                        <label for="q9a">True</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q9" value="2" id="q9b" required />
                                        <label for="q9b">False</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    What is the use of underscore variable in REPL session in Node.js?
                                    </h2>
                                 
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="1" id="q10a" required />
                                        <label for="q10a">It is used to store the result.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="2" id="q10b" required />
                                        <label for="q10b">It is used to get the last command used.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="3" id="q10c" required />
                                        <label for="q10c">It is used to get the last result.</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q10" value="4" id="q10d" required />
                                        <label for="q10d">None of the above.</label>
                                    </div>
                                   
                                </div>

                             
                                <div className='fcol1'>
                                    <h2>
                                    Which of the following is a GUI-based debugging tool for Node.js?
                                    </h2>
                                    
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="1" id="q11a" required />
                                        <label for="q11a">Core node debugger</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="2" id="q11b" required />
                                        <label for="q11b">Console</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="3" id="q11c" required />
                                        <label for="q11c">REPL</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q11" value="4" id="q11d" required />
                                        <label for="q11d">Node Inspector</label>
                                    </div>
                                   
                                </div>




                                <div className='fcol1'>
                                    <h2>
                                    Which of the following method can append specified content to a file?
                                    </h2>
                                  
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="1" id="q12a" required />
                                        <label for="q12a">fs.appendFile()</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="2" id="q12b" required />
                                        <label for="q12b">fs.open()</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="3" id="q12c" required />
                                        <label for="q12c">fs.writeFile()</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q12" value="4" id="q12d" required />
                                        <label for="q12d">None of the above.</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following Node.js object property is used to return the node immediately before a node?
                                    </h2>
                                  
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="1" id="q13a" required />
                                        <label for="q13a">localName</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="2" id="q13b" required />
                                        <label for="q13b">index</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="3" id="q13c" required />
                                        <label for="q13c">previousSibling</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q13" value="4" id="q13d" required />
                                        <label for="q13d">textContent</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following keyword is used to make properties and methods available outside the module file?
                                    </h2>
 
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="1" id="q14a" required />
                                        <label for="q14a">import</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="2" id="q14b" required />
                                        <label for="q14b">module</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="3" id="q14c" required />
                                        <label for="q14c">exports</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q14" value="4" id="q14d" required />
                                        <label for="q14d">require</label>
                                    </div>
                                  
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following platforms does Node.js support?
                                    </h2>
                                    
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="1" id="q15a" required />
                                        <label for="q15a">Windows</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="2" id="q15b" required />
                                        <label for="q15b">Macintosh</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="3" id="q15c" required />
                                        <label for="q15c">Unix/Linux</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q15" value="4" id="q15d" required />
                                        <label for="q15d">All of the above.</label>
                                    </div>
                                   
                                </div>

                               
                                <div className='fcol1'>
                                    <h2>
                                    Which of the following method is used to compare the placement of two nodes in the DOM hierarchy (document)?
                                    </h2>
                                  
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="1" id="q16a" required />
                                        <label for="q16a">cloneNode()</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="2" id="q16b" required />
                                        <label for="q16b">compareDocumentPosition()</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="3" id="q16c" required />
                                        <label for="q16c">getFeature()</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q16" value="4" id="q16d" required />
                                        <label for="q16d">getUserData()</label>
                                    </div>
                                   
                                </div>                                

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following is the correct syntax to initiate the Node.js File?
                                    </h2>
                                    
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="1" id="q17a" required />
                                        <label for="q17a">filename.js</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="2" id="q17b" required />
                                        <label for="q17b">javascript filename.js</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="3" id="q17c" required />
                                        <label for="q17c">node filename.js</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q17" value="4" id="q17d" required />
                                        <label for="q17d">node filename</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following module is required to create a web server?
                                    </h2>
                                    
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="1" id="q18a" required />
                                        <label for="q18a">net module</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="2" id="q18b" required />
                                        <label for="q18b">http module</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="3" id="q18c" required />
                                        <label for="q18c">net module</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q18" value="4" id="q18d" required />
                                        <label for="q18d">url module</label>
                                    </div>
                                  
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following route parameter formats are valid?
                                    </h2>
                                  
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="1" id="q19a" required />
                                        <label for="q19a">/books/!:from-:to</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="2" id="q19b" required />
                                        <label for="q19b">/flights/:from-:to</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="3" id="q19c" required />
                                        <label for="q19c">/users/:userId/books/:bookId</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q19" value="4" id="q19d" required />
                                        <label for="q19d">None of the above.</label>
                                    </div>
                                   
                                </div>

                                <div className='fcol1'>
                                    <h2>
                                    Which of the following areas, Node.js, is not advised to be used?
                                    </h2>
                                   
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="1" id="q20a" required />
                                        <label for="q20a">Single Page Applications</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="2" id="q20b" required />
                                        <label for="q20b">JSON APIs based Applications</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="3" id="q20c" required />
                                        <label for="q20c">CPU intensive applications</label>
                                    </div>
                                    <div className='fcolmain'>
                                        <input type="radio" name="q20" value="4" id="q20d" required />
                                        <label for="q20d">Data-Intensive Real-time Applications (DIRT)</label>
                                    </div>
                                    
                                </div>
                            </div>


                            <div className='col-sm-12'>
                                <div className='fcol1 lastinp ptt-20'>
                                    <div className='row inpuut'>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="name" placeholder="Your Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="email" name="email" placeholder="Work Email/Email*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div>

                                        <div className="col-sm-6 mb-12">
                                            <input className='form-control' type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className='col-sm-12'>
                                            <input type="submit" value="Submit" id='submitbuttonform' class="assesmetmain" tabindex="201" />
                                            <p class="feedbackcolor" id="response"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                    </form>
                </div>
            </section>


        </>
    )
}