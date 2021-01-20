### 工作流程

#### 安装依赖
```
yarn install || yarn // 严禁使用npm cnpm
由于有可能有部分依赖未适配monorepo, 会造成依赖出错
  参考：https://yarn.bootcss.com/blog/2018/02/15/nohoist/
  此时可以在单独package设置nohoist, 尽量减小范围，不然又会存在依赖被重复打包的问题
```

#### 清理依赖
`lerna clean // 清理packages的依赖`

#### 增加package
`lerna create @mo-demo/cli`

#### 增加依赖
```
yarn workspace <workspace_name> <command>
yarn workspace packageB add packageA // 给某个package安装依赖
yarn workspaces add lodash // 给所有的package安装依赖
yarn add -W -D typescript // 给root 安装依赖
```

#### 删除依赖
```
yarn workspace packageB remove packageA
yarn workspaces remove lodash
yarn remove -W -D typescript
```

 #### 构建
`yarn build // 为了保证依赖关系的准确，请只在root操作`


### 关于IDE或文本编辑器的缩进换行规范
> 请使用editorconfig, vscode需要下载插件：https://editorconfig.org/


### 代码规范
> 请注意检查husky有没有生效：.git/hooks/pre-commit 存在即是生效 !!important

> 请安装IDE或编辑器eslint插件，以保存代码时运行eslint --fix<br>
>https://github.com/microsoft/vscode-eslint


### git
> merge到master和develop时请使用--no-commit --squash<br>
> 主要是为了feature和hotfix合并时保持master和develp的提交记录清晰 !important<br>
> https://www.jianshu.com/p/58a166f24c81

> 代码提交请在根目录下执行yarn commit命令，根据问答进行提交<br>
> type 根据问题选择本次commit的类型<br>
> scope 填写影响范围，为package目录下文件名其中一个，如果改动到了跟目录的配置就填写root<br>
> short description 为修改的描述，请仔细填写，不要乱填<br>
> tapd链接放在long description，没有做验证，但是请必填<br>
> 最后The packages that this commit has affected 默认就行，会自动选择
