# ionicStudy

# 工程已经完成的功能有
<ul>
  <li>实现界面跳转(两种跳转方式)</li>
  <li>实现界面跳转是正向传值</li>
  <li>部分界面实现懒加载</li>
  <li>首页的轮播图效果</li>
  <li>实现记住密码功能</li>
</ul>

# 安装方式
    
    step 1：
    git clone code or download zip to desktop

    step 2：
    npm `i` or `npm install`, download the package

    step 3：
    `ionic serve`, run this app

# 打包的方式

    step 1:
    ionic cordova platform add android  添加平台
    
    setp 2:
    ionic cordova run android --prod --release   开发环境(--livereload)
      # or
    ionic cordova build android --prod --release	生产环境
  
    step 3:
    打包之后的文件地址  yourProjectName\platforms\android\app\build\outputs\apk


# 使用keytool生成keystore文件 
 keytool是JDK自带的加密工具，我们需要生成一个keystore文件，然后保存好，之后不需要每次都生成新的。
 
 命令行：
 
 keytool -genkey -v -keystore [keystore的文件名] -alias [别名] -keyalg RSA -keysize 2048 -validity 10000
     
     keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000


# 使用jarsigner签名 
jarsigner是JDK自带的签名工具，我们需要将release版本的apk文件利用keystore文件进行加密，也就是签名，签名之后的apk才能发布到Android应用市场。
 
运行命令行：

jarsigner -verbose -keystore [您的私钥存放路径] -signedjar [签名后文件存放路径] [未签名的文件路径] [您的证书的别名] 

jarsigner -verbose -keystore my-release-key.keystore -signedjar complete.apk app-release-unsigned.apk alias_name


# 常用的 ionic 命令
    ionic generate [<type>] [<name>]
    
    // 生成组件
    ionic generate component componentName
    
    // 生成不带有module的页面
    ionic generate page Detail --no-module
    
    // 生成带有module的页面
    ionic generate page Detail
更多查看：https://ionicframework.com/docs/cli/generate/
