###
 # @Descriptions: 
 # @Version: 
 # @Author: 
 # @Date: 2020-12-10 10:33:07
 # @LastEditors: dongwenjie
 # @LastEditTime: 2020-12-10 10:36:11
### 

  unset msg

  read -p "请输入commit提交的描述: " msg

  git add -A
  git commit -m $msg
  git push
  git status
