var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823245/cp2019 \n 小組倉儲: https://github.com/40823245/cp2019bg4 \xa0 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'works', 'text': '', 'tags': '', 'url': 'works.html'}, {'title': 'W4(hello程式)', 'text': '原始碼: \n void main() {\n  print("哈囉!");\n} \n hello程式 \n \n \n', 'tags': '', 'url': 'W4(hello程式).html'}, {'title': 'W5(上傳圖片)', 'text': '\n \n', 'tags': '', 'url': 'W5(上傳圖片).html'}, {'title': 'W6(For loop程式)', 'text': '原始碼: \n int i;\nint sum;\n \nmain(){\n  sum = 0;\n  for(i=1;i <=10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print("sum = $sum");\n} \n \n For loop程式 \n \n', 'tags': '', 'url': 'W6(For loop程式).html'}, {'title': 'W7(阻尼)', 'text': '阻尼係數=1 \n \n 阻尼係數=0 \n \n', 'tags': '', 'url': 'W7(阻尼).html'}, {'title': 'W8(嵌入dart)', 'text': '\n \n  取 Dart 程式的按鈕  \n 放大   回復   Hello   For Loop   Sum   Runge-Kutta   Mass Spring Damping   ROC Flag   Grid   Slithery   Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n \n \n', 'tags': '', 'url': 'W8(嵌入dart).html'}, {'title': 'W10-W15(小組任務)', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   forCF \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery   CF random_grouping \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n \n \n \n 溫度轉換 \n temperatures   °C    °F:  \n \n', 'tags': '', 'url': 'W10-W15(小組任務).html'}, {'title': 'JavaScript', 'text': '國旗 \n \n Clear Canvas   Draw ROC   Draw USA \n \n 亂數分組 \n 學員名單 URL:   每組人數:      \n \n', 'tags': '', 'url': 'JavaScript.html'}, {'title': 'W16 查驗考試', 'text': '\n', 'tags': '', 'url': 'W16 查驗考試.html'}, {'title': '星星講解', 'text': "\n 使用''canvas''、''2d''畫畫程式 \n \n drawStar(x座標，y座標，幾角星(5角星、8角星等等)，外半徑，內半徑) \n 外半徑(紅線) \n \n 內半徑(藍線) \n \n \xa0var rot = Math.pi / 2 * 3 \n pi=π \n 意思是2分之3 π=270° \n Ex1:45 ° \n \n \n Ex2:22.5 ° \n \n \n x抓cx值，y抓cy值，step計算方式=pi除以幾角 \n \n 預設''fff''為白色 \n moveTo移動到(x座標，y座標-外半徑) \n x=cx+cos(rot)*外半徑， x=cx+cos(rot)* 內半徑 \n y=cy+sin(rot)*外半徑，y=cy+sin(rot)*內半徑 \n lineTo畫線到(x座標，y座標) \n rot=rot+step \n \n 顏色設定 \n ctx.lineWidth=5 邊框厚度為5(此設定邊界和內部都為白色，所以看不出來) \n \xa0ctx.strokeStyle='white' 邊界為白色 \n ctx.fillStyle='white'內部為白色 \n 輸出範例 \n drawStar(10, 10, 10, 8, 4)\xa0 以此類推 \n", 'tags': '', 'url': '星星講解.html'}, {'title': '筆記', 'text': '一、開啟9443 \n \n 先打指令到cmsimde資料夾 \n 在執行python wsgi.py指令 \n 二、開啟8444 \n 先到cp2019資料夾找到http-server.py檔案 \n \n 使用白窗開啟http-server.py \n 點選Tools→go \n \n 三、進行上傳 \n 方法一 \n 先進到cp2019\xa0 →\xa0cd tmp/cp2019 \n git add . \n git commit -m "此更新的主旨" \n git push \n 輸入帳號(學號) \n 輸入密碼 \n 方法二(啟用ssh) \n 要先改.git裡面的config \n [remote "origin"]把之前的https加上#\xa0 \xa0打出第2行 \n \n 開啟putty\xa0 \xa0將設定調好 \n 點github.com\xa0 案load \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案 \n 回到session點選save再open \n \n 出現上圖就代表成功 \n 一樣先進到cp2019\xa0 →\xa0cd tmp/cp2019 \n git add . \n git commit -m "此更新的主旨" \n git push \n (此方法不需打帳號密碼) \n 方法三(啟用ssh) \n 使用資料夾的GitExtensions \n 點選GitExtensions.exe \n 修改設定 \n \n \n 確認正確以後\xa0 \xa0點OK \n 選擇Create new repository \n \n brown找到cp2019資料夾後點Create \n 點tools→Git GUI \n \n 先點Stage Changed(=git add .) \n \n 左下的框會出現資料 \n 然後右下的位置打上這次變更的主旨(= git commit -m "此更新的主旨" )可輸入中文 \n \n 點Commit→Push \n \n 四、修改網頁標題 \n 打開資料夾找到init.py \n \n 使用白窗打開 \n \n 找到並修改成site_title = "學號 cp2019" \n file→save就可完成', 'tags': '', 'url': '筆記.html'}]};