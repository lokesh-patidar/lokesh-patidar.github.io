import React from "react";
import './Skills.css';
import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";

export const Skills = () => {
  return (
    <div id="skills">
    <div className="skillContainer">
      <div><h1>Skills</h1></div>
      <div className="skillsBox">
        <div>
          <FaReact style={{color: "purple"}} />
          <h3>Redux</h3>
        </div>
        <div>
          <FaCss3  style={{color: "blueviolet"}}/>
          <h3>CSS</h3>
        </div>
        <div>
          <FaReact style={{color: "rgb(164, 116, 4)"}}/>
          <h3>React</h3>
        </div>
        <div>
          <FaHtml5 style={{color: "orangered"}}/>
          <h3>HTML</h3>
        </div>

        <div>
          <FaJsSquare style={{color: "rgb(198, 154, 8)"}}/>
          <h3>JavaScript</h3>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTACVMSFRRNWUqiEUGzQry78PuasZvoLZihg&usqp=CAU" alt="mongoDB"/>
          <h3>Mongo DB</h3>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzC6GnW2obd8u3QPIiUN2gy8rML6KWPh_23g&usqp=CAU" alt="node js" />
          <h3>Node.js</h3>
        </div>
        <div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAflBMVEUAAAD///8lJSWMjIxYWFjz8/PY2Njc3NxUVFQPDw+0tLRqamr8/Pzp6emhoaG+vr7j4+MfHx/v7++YmJjR0dHNzc00NDR1dXWoqKg/Pz86Ojqurq4uLi4ZGRnGxsbZ2dmBgYFhYWFJSUmTk5OIiIhdXV1FRUVubm4UFBR5eXko+nZKAAANtklEQVR4nO2da7uqLBCGtTIP4SG1cq3KLGtV//8Pvs6A5oFKDc39Xj4f9iFTuIWBgWCQ5P+5pG9noGuNgP+6egZUVFXpN8V+Ae37fn+3e02yT0Bnc5MS3TZOj4n2B6h4e4lpP3V7S7YvQMWeSDlN7L5MsSfAcCGVtAj7SbkXQGUxKfMlhbjopRB7AHS9Kh2V1YMpdg6oGL/P+CTpr3tT7BqwanxFbVYdZ6BbQOW4f82XmGLUbSF2CehO39ExU+wSsTtAN1jX45MkzSCdZaMzQPtSFw+08bvKR0eA6lFvwidJy3NH9bQTQLOm8RVldNIrdgDoWj9t+CTpaIjPTAeAodYOL5G+MIVnRzSg2qhtqSIKH0iJBXRaGV9BE8GmKBJQCVoaX1FiB1ICAcM/EXiJlkeBXYYoQOK3b1s48oTVU0GA6ufGV9SPIagUhQAqbXu+V7qKMUURgPaLIe0H2m9E1NOPAcnq1AkeSsCcxqeA/rk7vESn7aem+Bmg4tUe87XV4sM5jY8Ajc7xJJjp/8hBbQ+oiO35Xsn6ALE14OrecEj7ibT2vWJLQDfmzFV3KH2m9gmobHe94qGidvW0BaDSZc/3Qvq2DWJzQL9P4ytqZjefXmwKSKJ+ja+o26Xxj8PNAN3g9kU8VFNTbAJIPphPEqdJ0KjLaADob75mfEUtmqzTqA+4WX4bLNPtWL+e1gR0g29DlTSti1gLkBizbwNV9FPzR7c6gP712zRcHWuZ4ntAZTGQtqWqY41e8R2gOTTjK8p7i/gakATfcTvr6+9dr/gScPVmicQgdHo9p/EC0PwX8ECLV2PFp4CO9e18N5D3vFd8Ajh84ytKC54NpPiAc22wXcMT6c9MkQeoHr+d3VY6ck2RAzj/dk7bahnUAxye31lbnGpaBXS+OSfxoRZ1ANV/GHA2Ao6Aw9YIOAIOXCPgCDhwjYAj4MA1Ao6AA9cIOAIOXCPgCDhwjYAj4MA1Ao6AA9cIOAIOXCPgCDhwjYAj4MA1AnIBlydNO72NzcQR3KjVXKt/+9M0/o6vXfKQE/elJxe04v7oFoC/VrhSHUddhcFjV8iMFwhOOl5PkjS5puvAznijs7KDwnaSzZFunvHCcJVGDfqhifihvSkzbEM/eQhcmhbf8dQO4cIhDLe5jDUG9HPraZUDXYE4UxVF2Zbxro5CyGKd/GHDfyPnsfxPcbLFb5MDIYEuSRe6/hHDC+jhIxFSjLWTT57k09woudWFyiFFbAion8vXAqxFFvzTKPJF8Fm41JI/XUk6zUs3pnEurkmO3Z2ULipLaJZx6atmViCL8hJJl60ym1RiCHjLFoC3LSbg2NtEBl0GtsJtyfB8EuX5JvBVZSEBoCkt3Md9Ni0rhy4fhniGvr5NWRbSnu4NOBj4ZXwvCnvykW6i95NLhk9y8DfKZxpG9niZ7hprBogF5XonunR0d8fAWVj/fmGtu5oPPoLZPEsI6E4V2IDO7tM1GgPH3KWA5pTmz9poOl0+p0YsVMRvBEsiFbTEHS6oD6/4StcLCxFxJSSWuTlF2P1sg6soybUx4AVfX65l22Ma+Ho38K+cScTw/1CigHLyHycf3GKC+H4KCNdl/xcrlQdXtrnVt7REoW3EapxbV02rPXAg3+P17vEh5qQh4M5MyyvHAbm7ZRm7p5/P4LvOLQVMUiv1KpjrOAVMCjmin2PgmG31uybDWOUv7KFIFVazCjv4MTeXhoBWqfyyxPGl6mAGCuuE9lB5XWzyKaBSDuw0gW/46xRQYb3BclV9iZKk4svYwReL6/5hsST5k6Ak1eItaWE0ANTMRz4e0hJzOmDdmsBXQ/opRgujQUQpYHW3TATV8pgCsvuwpjuV1e93eBn4p1xaOa5gOvACOG240gxwmstHTtus+TxmJItcnhHQqW4UXcJrn6aALN+6IResjGm3gneLgKU4LseklzUkh5O1OSFuI8ClU+4IqM4kyxLUYSjjE/YJUg6Q82KwZ/EZ4IF99gudImfXLPQiHlaRUkElflLSE2JjU77nctUbAf7K2CFXBDXXYP0G2JWj419ZNgGQ8ELewutwGWDqrFxybyavKQGLgrwod85ltAiDu++hPiBUEJPzhB+VNhagNfYN2KnF2QuAXPG2Ml8JvnYETB0360lpb8AbWGJjSTggS8zmgbfxSKsNOH8C+JdUXWVWfpxVSMHl3CdpOcDUsqDtC6RlWTrEjFVOO+ajqPfyMMNiyQazcqCzqDYg2JXiWRUZ+RKQ2BbMXCkAoM8D3OUAUycA7nXsquYEAKXHTmTfOuf3OuwzV9QNprN8EU9rA74MqZBVjgl1UHNtHQBGPEAdyPQq4DMlgJKWi6pqhsZjP84kfuTPXBmPyioI8EFA42XmODS53Dsz3eCJ6wLg7VUaczD05TEfOFbJDaXW+X2RxE1b22aAZM7XI0gcG+nkfC0A5MYNvz2qKEkdIPl5Iuo2dfmPofrYO+fkXI+J5efOrgiy3rs+IK+RKShtlMkj2ac2iFWUAirrHCD3yyVpnpGOfElhPKxvAjvdkbW6NQI0awDq8GwTemU3awK0Z/edHiWYAmLSvG6Co/Uxoi2LUtpZpZ+uLA5i2AgwdelfCdvQ9Rp6lMwrx26CF6vrQtBbrADWKUEmdClkvxoP5RZj+V6bAG4go6/DaUJvRO60W87MED2ZiPNtSHpeAgSnkufJPBUQEl6YyB/2ruoDgqvGc7l28XZrYSMxAy57yfIuRw/AigcJguL2SoAwpHU5m/l23narTQ0jLheWBmmqhu1VnEhoztVdA8DlQeaM1Gix0YkRqPgmzeoq+5ACHqrBHG9zWocKgPjl6tBqArmNoHjLHU422WSUZ1uPkIVLA0B0ekjF1YXnUMcMawsbyq0B1p9keeZ0FHeYizmVAHfQSrmVqMcRFiwUOSldWWbRK8rozQFxFmJVnt+FssIRqkfknAt6zcyQAprlQSy+eiirAqCE05LldvSGr0u6wrXSiBtHZiavC4Oa5aybAFInpZS4lxYPzqWEDy8Qv3zNAItzKSx9LKoi4C8YQnlOBp8VV6aW0vTdO/qHpaYGoOdNGhk26VQkxGKDmYEJXFNzE2c3k11JBxhF88WSoqP/AiCdnSsO6pEP2lasjoW5yZOMZYtDYVII+4nMUU3AFTPgH0zcjViLMVngSJpA7tAACwaKY7T5jY4HoVzMTVq9l7MVzRgHkI1v/CNrFtc0aoOiZ29Y9v7YDN0P1h+Y6LrQfKY3Ta44gwpTprUAsyHmmXoIjuWdo9ijDZgL9TCuvHba5BMLAZ019sgrL1osFpFHg73Nb1xAiUVl9JNEpp6FVTYNosGmGBXbm0ZRHFBeGFrrdBIYbkoueHRI4+waA0qLNFgLSQcXLgxZsEkpeyA4Maho1FX7pXPzxHVddqfN3jb+NlHwdKJKlFs1nRE4ZmOaNAOsa94H5Quyj+1aQ0BpWbohhNp7glqkVsIy/6DLNpNpC3ctZJtkp0/8JJ/bxVnhSemMAuvRve9Kx2xk6PqleIFE9JlNARN5cwd/qSLugcWDvR0t2+L9Vnm3jfvD2d747EbHz7d4M3tb8QD12Fddksh1fK84B6PZqqvAJWKqq4LTE7F7kow94gy3AJSkvyi2AutcL7hMfjSxvsdB4J1rheCeLM5xfF5wvqsfozjRuTqTtb9OkwtRPvBGK8BGejpc6kcj4Aj4TiNgtxoBR8B3GgG7VfeA4Ityf13qR90D/hqG8cWQet0Dflkj4Ag4cI2AI+DANQKOgAPXCDgCDlwj4Ag4cI2AI+DAVQtw+38HNL9w9J4obesAytY/W4QnzkJl3sJpewhHnLXQhXdcAXdluDLso3qeiH9O6JOl70r0j1nijrNl4hUgHBT57Tw30bS8afg9oKzY/8yxL8cXB5+/2p2hBG3CA/SupfFql8fL7SeJKQ4+7sNvZS98E0A4MPnbBK81fXcA8TtAWQmrK7AHo5n/9tzat4AJojXQevpT51jeGoCJezpEU/z1ap06XAtQlsPKhuwvS58e6uW8JqCsrAblgp8OdQ+NrgsIC5YH472dGhzEWx9Qlp3z1w+KBtU9v7U5IMQG+TadJMXver5PAJNe8ct4mlPX+NoBJop52wP7wnvhVQsDlNX4fU460d+20TnmrQETU/zKCYxeM+P7BFAmRu+uTYMDzAUAJop6NcVZc+P7FFCen9/nS5C0Nsb3MaBM5rX2fHyuF6fsdgoIpth9PdWvNY4s7woQYqh166Dql9bGJwaw4zmNP/5kbq+AsuJ3Vk/jyt7CbwAmCrpobZZ3AXiCAGUzFt7xLz41PiYxgIkpip3TEGB8TKIAZRIKbE9jUXgCARNZYkxxcv+kYy9LJKDseAJmpjaCjI9JKKAs+/W2+j7Xny2udqIEA8rE/mSmPw0BIFCiARN5bU1xdxdceqAOAGWHF5XovWiYEdHqAlAm1UAJ74tPtPExdQKYyG6GuBNvfExdAcqKV7+12UUie76iOgOU5XlUk+/uv39Ya3UIKBO/TiFOwm6Mj6lLwETV0CMl/QTvH/KROgaUzWqQt3zpnYWM+V6pa8CXS6Y2XRofU/eAMlnxTVF/v0RCgHoATBRUTbFz42PqB1A2reKPw5P4s9nO+uoJMDHF/I/DfRgfU2+Aj2NRpHV/eL0CsjmNU0/Gx9QroKxuA6Mv42PqF/ALGgH/dY2A/7r+A60969cf+ztlAAAAAElFTkSuQmCC" alt="node js" />
          <h3>Express</h3>
        </div>
      </div>


      <div className="tools">
        <h4>Tools</h4>
        <div className="toolsBox">
          <div>
            <img src="data:image/png;base64,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" alt="netlify" />
            <h3>Netlify</h3>
          </div>
          <div>
            <img src="data:image/png;base64,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" alt="vercel" />
            <h3>Vercel</h3>
          </div>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAACzs7N0dHQvLy/b29v8/Pzs7Oyurq709PTw8PD6+vrY2Nienp7Ly8vk5OTR0dGmpqbExMS9vb1jY2OOjo5CQkLh4eFXV1d7e3uWlpaDg4MUFBROTk46OjpeXl5paWknJydFRUUYGBgiIiILCws9PT1vb28yMjKRkZGAgIAdHR20P4KIAAAKQUlEQVR4nO1df0MqKxBdX6WVmV6rm93K6mbZj+///V7WunIGdmFggPU9zn83d7kchZnDMDBVVVBQUFBQUFBQUFBQUNAzjCaL1ctqMRnl7kgknB4Mtrg5yd2ZGPgzUDHJ3R1x/DOguMjdJVHMlhrBweD1LHe3xDB9MPDb4PK/YXLGty38Nrgd5+5eOH4Bo8VsNFvAX37l7mAg5iuVzeH59x/P39Q/Ps0z9zEER/fwcx03HxzD3++vM/YxBKdr4HE1VD+8gs8OTnN1MgTo4TWzOXqEz/9k6WMI0MP/Nrm+s7/wzD/J+xgC9PAvbfLl4k59bDlL2scQEA/fJUEn8OTDNFkfQ0A8vGUZcXIDT98OO5/uBYiHtzuCa1QAx9YX8sLo4W04P/R4KQ+u2zy8DagAFn2djtTDs15GBdDPGIDFw9swuoT3+xcDuID+GT28DWe/oY1+xQBQnrR6eBsuXtRm/vYnBjCVG2CoAC77YXKGZJkQZiSIXrjqgQIghj58qTdCzZdbAaCzfpbRzmc+siEOpii4RH7CL91AQ3PZFAARzfU0DF2tG1vNowAmhp5sELZab2s1vQJAD/8J//L31fNntZ2VUKs+QPnxOSdBC894PQr3L92AhL2Ekh9IEOknpkt8NT9er2y+7YYltvqYZheAePiPbVyemAiur0bh3uiG8UdQqz5ADw+RlYDVOo5yCBFP08YA0MO/UQ+PHz+5+moMzWlhftwFiKoAyNdpinB6iDiyMjRt1SSKAZCJ9t7yGHO1TqR2W7AtRQyAmLV27cJarWNorsMEEwMurwDI4vSo82Hn1focgt4Wh3cUMwaAa/g7e+NOq/Uj6uF5rQoqAK8BYvXVJDQn1KoPhp6T/AQ1CvXVLR7e2mqYrjAhwFB3BIjRw7OWlcK7AIEB9/kTvL4VCLMwF37+FPS6iiHafZ+vi2zUbIbANDwQgwPr0jtlZQSLF16UvsEQPfrHyM3D21oF43DnaXGGqrMKSF8ataVEfQn3gFbV8XXn9z0pPjDQ9Zy9GvkFJraprd77NHDevC6Q03Oh8/OO/SutPjWt+cQxd6PgVSIM+ocQlEgvUaTWJf/tododiawlUACBsf9v4Pzmz8Qz/MolspYaBSDxhRGpNeDPaW3mvAsIpG8FIJKqd0y7x5/VetqySNbSfCLBb3Yo0DkDQ/fAS1xo2yVBDA/Y+TGxQUTSZB3KkEYscydK4jf+eFodBDPURkXORElcViw3BlSCoXaaIFeipLaxsYEMw69/Qogky77sGJf326EkxZDKrvQmB0M0O3Mgx5CGSCSElzvmsEWpRjMFGWY0ORh3vAPRIMqQbpIkMjndcUdhhlTraLtPEYAGQItmijOk/2Ps4yC4AjBEMyMwpPvRMVNBcAdkZVLtMRhqsd5YJseYMEARhyGVT3FMDq5x2w7yxWJI16Bv4qkgaNLaj2LEY1gN37EPoqkgqIS7VGJEhpqjkjsQOmJsJ0RlqJkcmQOhvCzayAxpKtqnwN4zydixDf7oDGmPloEmh6xx7ZopAcNqjGY95Aw62cVx6XYKhl8mB12zr8khUd62jB1EGobaoWYvk4PDvSNjB5CKIZ1An+zALy7M3Pfz0jGkv8Hv7qwiAtz6dsjYaZCSIZ1HruNMi/KylHxShprJuXIzOfjjMwNAiRlq2WcOJgczWiwpczqSM6QnZZ8tJgejW5wJWCMDQ7q3cN/xq4wDJmCNLAyp5Vi3qRz8KtZe4ZA8DLX1j3F9gB6UPQFr5GKoJdFoazzMwPNflORjSK+9wO17skUQkNSckyHdTVFCqzgBg+KReRnSHbH1j8rBVXPg4YLMDLXdnHca+eBLdILsDGm+7ACjV+GRnVCGXkl/LW3pkIjO3QcyFIqf0by9b0hEWBuTxWe4s3YiWVokc38gszGn5JHzfwh1RdOlLJ3hfbVLKyBywm8P545InpCyTBI4J0H2+MLz2kR20GoFsBL4vujMlsjcE9hBq5NWww20RO8MFj48G3omw9B04as3wyXkQoVeqFYzXAQ1gmG5l2Ugw5sKUxPDfLQAQxIV+KhuAhkeaKd4QhRAzfDBvwX9zKmILrWctXZHzdDj6MAPMMj1szElpLzJeXlfBVAzfPR7+ww1Q81JbG1BTkT6ebQQhmRLvfHPcqsnoiG8FMC5P8PWb1hyfXhtHCUc1AzXvr3ZzhI100x2BYzhB/6Vqp4McQ1NoujSa3y01lwFMPdhOO2+AFw8ikFveWApAA+GY5viiBCncbipow0XbIb2WyWiRKJQARhzIs246GjU+Dxkd5vnfaRYGx5OcFYAPIbkvskWDtGiieif1m4KgMPQ9UrzePFSEltymo6MICxOwI6d75gRYVQALptHzZLM9cl6FnTlkseNeavnPFwWDMfODBV7bYn7x47q7wbToUOj7gx3YTnb8I++b9FsaDMYftif3DK03yqRYGdm5s7wF5ehg/JNwPCIzfDW/mTN0MHRFoatiMnQ4SKYfWU4KQwbFIY79JKhQwL3njN0iNPtK8M//xeGDjleheEOhWErojCsTyw6xAMKwx0Kw1ZEYVifOHHI7ikMd+glQ4feJGBYB28dkgoyM6zzKPiZ8Ns79+wp2HkZntT95B/O3d6b+GqN1zMY3oozPNkes/JIBWyyaGwKJCfD5jCAT4rObNCge4wzGH7IMlRudvFKuVMC6523xTIYumdoOTBUb3bxy0FyvUeYz9DB7lkZwk70s2dC7gi2QVvTehkMD6QYytwFXVVjpws4GAzXQgyl7vOu3O5kT85QuDKr/V59BsNHAYbylXWstRGSMoxQG6Gy1rdgMLwMZRitwhVeKkYOXPMZOiTgGBnikU3hOqV4MRyc2WUwfAhheCRTzrUdrbWCGAwX/gxPY9cKqtrrPSVhmKjms7lmF5+hgwdDhqRoS8yqnaa6awyG914MA4u2cKHXzovMMHHtvEqvfzi8ZjN0WMzVDKcZ6h9WmgK4dWf4l8sQE5IT1bDcgBRWi8dQBe9apmDoZVVcGNZfjIMY0RhG8PA20Mq9bw7vvHozTF8PuNIUwLPDKzVDh+GGFYbz1HSuPAz50pFhQg9vA3O5XTO0XB/tfjtrErBKq7owHIWXZRMGpz5iLb86Rh3vdtZUGOF07DB7VoZooGWvJg6Ca53SmmFbx52ql+YCiQG0dO6wi6FzBdpcwEM0ZglZMzRt2LGqCGcCOahrSrFsZ5hoDR8K6wUtTy0ME9XdlgAemNectZmhcJQ+NgylVXcwMRSufpsAxGfDlFppDIl89yy8mhpEdylm8ZMyJB6+zxMQMYNbIXcKgDBED88//J4VZgXwrDIkHj5XqTN/mBTA3Y4h8fA5y9V5g1yksVEA9ag8oQsSx2PE/YOmAOrfcIweXuQ6uFzA4urLH4Yv8EfGcf5+AhWADpmyJllBFABCrjRNVhCzucMeeXgbjMXV98zD26DvAuyfh7cBJeheengblGXEzb56eBtOJw/LwWox6U+QsKCgoKCgoKCgoKCgoKDGv7U8inlieUUgAAAAAElFTkSuQmCC" alt="codesandbox" />
            <h3>CodeSandbox</h3>
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3RdVtDNdUU-Zui7pAKxXoTeLUzT4TRsDYA&usqp=CAU" alt="github" />
            <h3>GitHub</h3>
          </div>
          <div>
            <img src="data:image/jpeg;base64,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" alt="vs-code" />
            <h3>VS code</h3>
          </div>
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////LODfJKyrioaHKMC/ZfHvIIiDz2dnek5LJLSzKNTTQSkn24uLIIiHMOTn129vinZ367e3uy8rSVlX99/fdjYzmrq7uxMPQTEvFAADWcXHNQD/GEQ/35+fVbWz77+/bhITUZmXmsLDyHCq4AAAB8UlEQVR4nO3b0VbaQBRAUYNtkEgBFQpUrG3//yO7ipmxNBAvTYrQtffjcBPn+GKWGa6uAAAAAAAAAAAAAAAAAAAAAADgaMvZ9bmbLTsVLsrBuSsXnQpvRsW5G90oVHjuFCpMhdWHgPxTI8NHTh+8vqfC6uFjQN7yl8Dw17TFSeTWh6/vqXBwHZmeVC/T5VNgePqp/uXd/t3WxmW/hbPIdC4cB4aHHQunCmMU7lK4Q+FbFAa1FM7vas95qaUwT8/TSlthGr5ruf7fF96vy63N6w5bCpf19PpzWmkpnNfD5To/Onzb1Ct5IycoTDt8yEtthfX0IFQ4KOob5cJF4+FKYZBChZnCHQq3FAYpVJgp3KFwS2GQQoXZsnx52VD+t4VNChUqDFKosIXCUxc233J3LRy3/Fc/nY8o8xuD5kZ6fstdPK5u/1TnFJP00apIG2sW3k8OXl8cvnWVFlaPRWMjVb+FRdVQND5qKVyWgesDt24uvcuJoZYn7/4pVKhwL4W96li4qF8uh+SIPefa0vNBMTrihiGbbifZn4ZHmE7qij1nE7/nv8/TY24ZETkm2Jf01LbnxGj6ZPDjhPvpX/Hbo8cBr/9ru0gKFZ4/hZdfOHr7m2abyy6MfFtw+N6bBAAAAAAAAAAAAAAAAAAAAACAX34CrC5ayvgCOKgAAAAASUVORK5CYII=" alt="npm" />
            <h3>NPM</h3>
          </div>
          <div>
            <img src="data:image/png;base64,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" alt="Git" />
            <h3>Git</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

