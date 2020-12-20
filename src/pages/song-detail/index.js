import React, { memo } from 'react'
import { SonglistContent, SonglistWrapper } from './style'
import qs from 'query-string'

export default memo(function JMSonglist(props) {
  // props/state

  // redux hook

  // other hook

  // other handle
  const { songlistId } = qs.parse(props.location.search) // 获取传递得歌单ID,之后根据ID发生网络请求

  // TODO:
  // 1.歌单基本工程完成
  // 2.开发文档文章,总结。
  // 3.指定计划,完成目标

  return (
    <SonglistWrapper>
      <SonglistContent>
        <h2>歌单详情页</h2>
        <br />
        <h2>
          当前歌单ID:<span style={{ color: 'red' }}>{songlistId}</span>
        </h2>
      </SonglistContent>
    </SonglistWrapper>
  )
})
