var tileData = {
    "00": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAIElEQVQ4y2P8z0A8YGIYVTyqeFTxqOJRxaOKRxUPsGIAD9gBVz2pIi0AAAAASUVORK5CYII="},
    "01": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAIAAACR5s1WAAAAHUlEQVRYw+3BAQ0AAADCoPdPbQ43oAAAAAAA4MsAFtwAAe7QDg8AAAAASUVORK5CYII="},
    "02": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAIElEQVQ4y2NgGAWjYBQMT8D4nwTFTAyjikcVjyoeMooBNi8BK3WxYbsAAAAASUVORK5CYII="},
    "03": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAXSURBVDjLY0ACgggwKjwqPCo8LIUFBQHd+CAlJgGVngAAAABJRU5ErkJggg=="},
    "04": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVDjLYxgFIxUIYgWjwsNcWFAQAMlZICX713DJAAAAAElFTkSuQmCC"},
    "05": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAXSURBVDjLY0ACgggwKjwqPCo8LIUFBQHd+CAlJgGVngAAAABJRU5ErkJggg=="},
    "06": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAjUlEQVQ4y7XKuQHAIAwDQHn/oUnBZ8CPXOTqA37SpHAhhcvnBj438LmBz/1yeVwqz8vkdYm8b57VTbO+WT5uks8b5+uG+b5Rfm6Q3+tn47rZul42r5Pta2fnmtm7Vnavkf375uA+Obp3Du+V43vm5B45uzqnV+X87kzclZk7M3VH5m7P5IUULqRwIYWLD3qIKwDNYOcOAAAAAElFTkSuQmCC"},
    "07": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABWSURBVDjLdcqhEQAwEITAlHD03+y7KEDu8KI5E+w7BM+Z4DkTPGeC50zwnAmeM8FzJnjOBM+Z4DkTPGeC50zw3/Ed3/Ed3/Ed3/Ed3/Ed3/Ed3/HdlB2mByAPamISYgAAAABJRU5ErkJggg=="},
    "08": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABQSURBVDjLbcpBEQAADIOwTQL+zdZAeHI59t4Ze5dxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlnnHHGGWecccYZZ5xxxhlHXAMRySA7OTbxcwAAAABJRU5ErkJggg=="},
    "09": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABXSURBVDjLdcqhEQAwEIRAKCH9N/sqjkPugK+CwTYz2GYG28xgmxlsM4NtZrDNDLaZwTYz2GYG28xgmxlsM4P/Tu/0Tu/0Tu/0Tu/0Tu/0Tu/0Tu/NpsIBhVcexdRrR8QAAAAASUVORK5CYII="},
    "0A": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAXUlEQVQ4y+3SyQ3AMAwDQcf99zxpgXzISADrTQg8dq17B85u1B8RP0W+/3k29dmUZ1NtmOpZITY1t0Ks+KywofCsCKhoQ1Gdomf5KIoF5XPL2ZCDJKdOiqiUZwHYL/f4GRirVzXWAAAAAElFTkSuQmCC"},
    "0B": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABHSURBVDjL1cmhAcAwDMRAjyDtv2xZQPsPDAIqeJq/xkX2JrNid8yK3TGZ3TGZLUxmC5PZwmS2MJlfftjCFrawhS18hp+YmQd4Jw2f3zH52AAAAABJRU5ErkJggg=="},
    "0C": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABLSURBVDjLzcyxDYAwAMRAfgTvvyxIKRDEzReJ4vIKX3M8KU488M8oo4wyylH+KLp4Oc4oxxnlOKMcZxqOMw2nYhpOxazj7GeOZrgBQF4yq7grFEUAAAAASUVORK5CYII="},
    "0D": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABPSURBVDjLzcrBCcAgFATR2RLSf7MJBAnqCP6DkD2+HZ7lmsa7BY8H7rjjjnvHcf68ZxbccjzHczzHczzHczzf5zhT45SYGqfEnOQc5L8Pbm/mDK9F+RtSAAAAAElFTkSuQmCC"},
    "0E": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAeElEQVQ4y9XQSwoAMQgDUDP3v3NmMTD0q6bgou4sjzQISw7NDDn2DbIwxBx2pKWDuXqEYNeYm+8g2AXm/joQ7IQ9O2LXDti3PQ5shyPb4tA2OLb2mDAQgn+csUc1KOCcPaiRDNaS5RqsSmZN58pr0G7rXHgN3tf5BUNfGyO5y4/WAAAAAElFTkSuQmCC"},
    "0F": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABSSURBVDjLzcpbCoAwFAPRyRLc/2YLgn1gAl5owXyeDHCZcS/w68B7Z+R58YkJTGB5Hr4ygZ8cn+NzfI7P8Tk+/8wEVokJrBKzhVViTrJ+wzsGDbM5DealNbIDAAAAAElFTkSuQmCC"},
    "10": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABLSURBVDjLzcyxCQAgFANRM8Ltv6yFjeI1H1RM+TjSni/fMPc4JeYAp8Qop8Qop8QoxxnlEeMxHuMxHuOKXqyMcpRnxR4mxhh23gzooT8N5tpwu3MAAAAASUVORK5CYII="},
    "11": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABLSURBVDjLzcnBCYBAFMTQLWHSf7OeFJXJ4YML5viydpbfMDs5I+YTzogRzogRzogRTmeE0xnhdEY4nV9+McIIp/PdeSSM8DkorXUAzQsPIfnBZjMAAAAASUVORK5CYII="},
    "12": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAZklEQVQ4y+3TSQrAMAxDUan3v7O6KCUdMvwuC/bGSXgYjGOJR8ypZE4pzpHMKcFpR3O6wrlfzekM5/1kTkc4/QrmtIcz7ticPnHmEzKnV5z1jzKnJw7bAHMqmVPJH6w2FS5c+Dd4B8reFyomBKZ0AAAAAElFTkSuQmCC"},
    "13": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVDjL7chBAQAwCAAhjLD+ZS1wDRxPzCv69evXr1+/fv369evXr1+/fv369evXr993EgvQtg9uPcNM7QAAAABJRU5ErkJggg=="},
    "14": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVDjL7cgxAQAwDMCgVgL+ze7dEQnlZM75bK9evXr16tWrV69evXr16tWrV69evXrl8gC/8A9uCrJe2gAAAABJRU5ErkJggg=="},
    "15": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVDjL7chBAQAwCAChRfD6l7UADRxP3nfVuPPnz58/f/78+fPnz58/f/78+fPnz59f3Sx7yxC4dACKNAAAAABJRU5ErkJggg=="},
    "16": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAXklEQVQ4y+3TSQ7AIAxDUfv+h3YXFQJahn+AeBNAT0hRQKpUKpWYU8mcUpy3mFOC05fm9IYzb83pCed/ZE53OOsbzOkKZ9+xOf3inCdkTkec+4sypw2H/QBzKplT6QGHThYADcOoqwAAAABJRU5ErkJggg=="},
    "17": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVDjL7chBAQAwCAChRfD6l7UADRxP3nfVuPPnz58/f/78+fPnz58/f/78+fPnz59f3Sx7yxC4dACKNAAAAABJRU5ErkJggg=="},
    "18": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURf///wAAAFXC034AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA2SURBVDjL7chBAQAwCAAhF4H+ZVfgGihPJr1evXr16tWrV69evXr16tWrV69evXr16jWuNzYfBKcvkge2g10AAAAASUVORK5CYII="},
    "19": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA1SURBVDjL7chBAQAwCAAhjLD+ZS1wDRxPzCv69evXr1+/fv369evXr1+/fv369evXr993EgvQtg9uPcNM7QAAAABJRU5ErkJggg=="},
    "1A": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAo0lEQVQ4y5XVOQ7AQAhDUTO5/40jJcVkmcWAofxCr7WB3XHSbLRetKJRmP9y2YGp7MFU9mAmuzCTXZjIPkxkH97lAN7lAN7kCN7kCF7lEF7lEF7kGF7kGJ7lBJ7lBJ7kDJ7kDB7lFB7lFB7kHB7kHP5lAf5lAf5kBf5kBX5lCX5lCX5kDX5kDe6yCHdZhNEKMKwAoxVgWAFGK8CwAsx30JULMG5clBdnBw9/rQAAAABJRU5ErkJggg=="},
    "1B": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURf///wMDAwAAAK3QDs0AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABhSURBVDjLlcyhFYAwFMDAtCP8Edh/SBQ8xFUQGXF9muvtu7f38u6wx3t7L+8Oe7y39/LusB884xnPeMYznvGMZzzjGc94xjOe8YxnPOMZz3jGM57xjGc84xnPuPd47z+7bs1GHiHxaMrSAAAAAElFTkSuQmCC"},
    "1C": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURf///wAAAAMDA84zFX0AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABYSURBVDjLlcwxAQAgDMAwwEElzL9JDORZzx45m+5qj3e8z/t6j3eZznSmM53pTGc605nOdKYznelMZzrTmc50pjOd6UxnOtOZznSmM53pTGc605nOdKTrA8nIECh3FU2GAAAAAElFTkSuQmCC"},
    "1D": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURf///wAAAAMDA84zFX0AAAAJcEhZcwAADsMAAA7DAcdvqGQAAABcSURBVDjLlcyhAQBBEMLALQGogP6rfPkmiIsckRvpicPswWXmuXluDy6zmMPswWUWc5g9uMxiDrMHl1nMYfbgMos5zB5cZjGH2YPLLOYwe3CZxRxmDy6zmP/53QctNBFjuLKzbQAAAABJRU5ErkJggg=="},
    "1E": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAAAAAA77wXdAAAAa0lEQVQ4y7XRQQrAIBBD0bT3v+scIS5qWxURAonrzyOMQOjxVupLgBGSiZBMhGQiJBMh+YEDcof98gvb5Q92yz9slgfYK4+wVZ5gpzzDRnmBffIKa/IhLmUGhZjSDCEu5XQU5FI+hcLmLYwG2YAY6N7loPUAAAAASUVORK5CYII="},
    "1F": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAP///+/v7zgrBCYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABESURBVDjLlcyhAcAwEIDAjACZIPtPWVnzL0Ce4CyR2MYktjGJbUxiG5PYxiS2MYltTGIbk/jO7MIkvjO78JuZmf/5OR/zohDLoyKwAgAAAABJRU5ErkJggg=="},
    "20": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURf///+/v7wAAAL3bAWoAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABESURBVDjLlcihAYAwAMRAmhEYIfsPiSziTU7ecx2vX7P73e3ss5vUzj67SW1pUlua1JYmtaVJbWlSW5rUlia1pUm9Uj84SF8281wbWAAAAABJRU5ErkJggg=="},
    "21": {src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsBAMAAADsqkcyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURQAAAO/v7////0BXZ+UAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABPSURBVDjLlcyxDcAwDMRA5kfQCNl/yDR24EIGRJZXkKN6/05Oz0/PXLh6jmIuXD1HMY73Zcb7MuR1GfK6TDmKcRzFOI5iHEcxjqMYxzEMH6RGHqrfRJlsAAAAAElFTkSuQmCC"}
}

var mediumQuality = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 92, 100, 108, 116, 124, 132, 140, 148, 156, 164, 172, 352, 360, 368, 376, 384, 392, 400, 408, 416, 424, 432, 444, 452, 460, 468, 476, 484, 492, 500, 508, 516, 524, 704, 712, 720, 728, 736, 744, 752, 760, 768, 776, 784, 796, 804, 812, 820, 828, 836, 844, 852, 860, 868, 876, 1056, 1064, 1072, 1080, 1088, 1096, 1104, 1112, 1120, 1128, 1136, 1148, 1156, 1164, 1172, 1180, 1188, 1196, 1204, 1212, 1220, 1228, 1408, 1416, 1424, 1432, 1440, 1448, 1456, 1464, 1472, 1480, 1488, 1500, 1508, 1516, 1524, 1532, 1540, 1548, 1556, 1564, 1572, 1580, 1760, 1768, 1776, 1784, 1792, 1800, 1808, 1816, 1824, 1832, 1840, 1852, 1860, 1868, 1876, 1884, 1892, 1900, 1908, 1916, 1924, 1932, 2112, 2120, 2128, 2136, 2144, 2152, 2160, 2168, 2176, 2184, 2192, 2204, 2212, 2220, 2228, 2236, 2244, 2252, 2260, 2268, 2276, 2284, 2464, 2472, 2480, 2488, 2496, 2504, 2512, 2520, 2528, 2536, 2544, 2556, 2564, 2572, 2580, 2588, 2596, 2604, 2612, 2620, 2628, 2636, 2816, 2824, 2832, 2840, 2848, 2856, 2864, 2872, 2880, 2888, 2896, 2908, 2916, 2924, 2932, 2940, 2948, 2956, 2964, 2972, 2980, 2988, 3168, 3176, 3184, 3192, 3200, 3208, 3216, 3224, 3232, 3240, 3248, 3260, 3268, 3276, 3284, 3292, 3300, 3308, 3316, 3324, 3332, 3340, 3520, 3528, 3536, 3544, 3552, 3560, 3568, 3576, 3584, 3592, 3600, 3612, 3620, 3628, 3636, 3644, 3652, 3660, 3668, 3676, 3684, 3692, 4048, 4056, 4064, 4072, 4080, 4088, 4096, 4104, 4112, 4120, 4128, 4140, 4148, 4156, 4164, 4172, 4180, 4188, 4196, 4204, 4212, 4220, 4400, 4408, 4416, 4424, 4432, 4440, 4448, 4456, 4464, 4472, 4480, 4492, 4500, 4508, 4516, 4524, 4532, 4540, 4548, 4556, 4564, 4572, 4752, 4760, 4768, 4776, 4784, 4792, 4800, 4808, 4816, 4824, 4832, 4844, 4852, 4860, 4868, 4876, 4884, 4892, 4900, 4908, 4916, 4924, 5104, 5112, 5120, 5128, 5136, 5144, 5152, 5160, 5168, 5176, 5184, 5196, 5204, 5212, 5220, 5228, 5236, 5244, 5252, 5260, 5268, 5276, 5456, 5464, 5472, 5480, 5488, 5496, 5504, 5512, 5520, 5528, 5536, 5548, 5556, 5564, 5572, 5580, 5588, 5596, 5604, 5612, 5620, 5628, 5808, 5816, 5824, 5832, 5840, 5848, 5856, 5864, 5872, 5880, 5888, 5900, 5908, 5916, 5924, 5932, 5940, 5948, 5956, 5964, 5972, 5980, 6160, 6168, 6176, 6184, 6192, 6200, 6208, 6216, 6224, 6232, 6240, 6252, 6260, 6268, 6276, 6284, 6292, 6300, 6308, 6316, 6324, 6332, 6512, 6520, 6528, 6536, 6544, 6552, 6560, 6568, 6576, 6584, 6592, 6604, 6612, 6620, 6628, 6636, 6644, 6652, 6660, 6668, 6676, 6684, 6864, 6872, 6880, 6888, 6896, 6904, 6912, 6920, 6928, 6936, 6944, 6956, 6964, 6972, 6980, 6988, 6996, 7004, 7012, 7020, 7028, 7036, 7216, 7224, 7232, 7240, 7248, 7256, 7264, 7272, 7280, 7288, 7296, 7308, 7316, 7324, 7332, 7340, 7348, 7356, 7364, 7372, 7380, 7388, 7568, 7576, 7584, 7592, 7600, 7608, 7616, 7624, 7632, 7640, 7648, 7660, 7668, 7676, 7684, 7692, 7700, 7708, 7716, 7724, 7732, 7740]
var lowQuality = [0, 16, 32, 48, 64, 80, 92, 108, 124, 140, 156, 172, 704, 720, 736, 752, 768, 784, 796, 812, 828, 844, 860, 876, 1408, 1424, 1440, 1456, 1472, 1488, 1500, 1516, 1532, 1548, 1564, 1580, 2112, 2128, 2144, 2160, 2176, 2192, 2204, 2220, 2236, 2252, 2268, 2284, 2816, 2832, 2848, 2864, 2880, 2896, 2908, 2924, 2940, 2956, 2972, 2988, 3520, 3536, 3552, 3568, 3584, 3600, 3612, 3628, 3644, 3660, 3676, 3692, 4048, 4064, 4080, 4096, 4112, 4128, 4140, 4156, 4172, 4188, 4204, 4220, 4752, 4768, 4784, 4800, 4816, 4832, 4844, 4860, 4876, 4892, 4908, 4924, 5456, 5472, 5488, 5504, 5520, 5536, 5548, 5564, 5580, 5596, 5612, 5628, 6160, 6176, 6192, 6208, 6224, 6240, 6252, 6268, 6284, 6300, 6316, 6332, 6864, 6880, 6896, 6912, 6928, 6944, 6956, 6972, 6988, 7004, 7020, 7036, 7568, 7584, 7600, 7616, 7632, 7648, 7660, 7676, 7692, 7708, 7724, 7740]

var tileProcessing = {
    "00": {inv: "01", fill: 0},
    "01": {inv: "00", fill: 1},
    "02": {inv: "04", fill: .5},
    "03": {inv: "05", fill: .5},
    "04": {inv: "02", fill: .5},
    "05": {inv: "03", fill: .5},
    "06": {badinv: "08", fill: .5114},
    "07": {badinv: "09", fill: .5114},
    "08": {badinv: "06", fill: .5114},
    "09": {badinv: "07", fill: .5114},
    "0A": {badinv: "10", fill: .7954},
    "0B": {badinv: "11", fill: .7954},
    "0C": {badinv: "0E", fill: .7954},
    "0D": {badinv: "0F", fill: .7954},
    "0E": {badinv: "0C", fill: .2257},
    "0F": {badinv: "0D", fill: .2257},
    "10": {badinv: "0A", fill: .2257},
    "11": {badinv: "0B", fill: .2257},
    "12": {inv: "18", fill: .25},
    "13": {inv: "19", fill: .25},
    "14": {inv: "16", fill: .25},
    "15": {inv: "17", fill: .25},
    "16": {inv: "14", fill: .75},
    "17": {inv: "15", fill: .75},
    "18": {inv: "12", fill: .75},
    "19": {inv: "13", fill: .75},
    "1A": {inv: "20", fill: .25},
    "1B": {inv: "21", fill: .25},
    "1C": {inv: "1E", fill: .25},
    "1D": {inv: "1F", fill: .25},
    "1E": {inv: "1C", fill: .75},
    "1F": {inv: "1D", fill: .75},
    "20": {inv: "1A", fill: .75},
    "21": {inv: "1B", fill: .75}
}
