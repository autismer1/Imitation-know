import React, { memo } from "react";

import {
  JDiscoverDiscussItemWrapper,
  JItemHeader,
  JItemContent,
  JItemWrapper,
  JAWrapper
} from "./style";

export default memo(function JDiscoverDiscussItem(props) {
  return (
    <JDiscoverDiscussItemWrapper>
      <JItemWrapper className="wrapper container-box-shadow">
        <JItemHeader className="item1-wrapper">
          <div className="header-bg">
            <div className="banner item1"></div>
            <div className="item1-mask1"></div>
            <div className="item1-mask2"></div>
          </div>
          <div className="header-content">
            <JAWrapper className="discover-a-title text-nowrap" target="_blank">
              考研上岸经验
            </JAWrapper>
            <JAWrapper className="text-three-nowrap intro">
              考研过来人「经验」「体验」分享，关注本圆桌，助力考研人成功上岸。
            </JAWrapper>
            <div className="info">
              <div>
                <span>0 位嘉宾参与</span>
              </div>
              <div>
                <span>85 人关注</span>
              </div>
            </div>
          </div>
          <div className="follow-btn">
            <div className="btn">关注圆桌</div>
          </div>
        </JItemHeader>
        <JItemContent>
          <div className="question-item">
            <JAWrapper className="question-title text-nowrap">
              考研最后一个月坚持不下去了怎么办？
            </JAWrapper>
            <div className="question-count discover-count">308 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              22 考研初试在即，现阶段应该如何规划复习任务？
            </JAWrapper>
            <div className="question-count discover-count">21 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              考研备考过程中有哪些令人沮丧的瞬间？
            </JAWrapper>
            <div className="question-count discover-count">18 个回答</div>
          </div>
        </JItemContent>
      </JItemWrapper>

      <JItemWrapper className="wrapper container-box-shadow">
        <JItemHeader className="item2-wrapper">
          <div className="header-bg">
            <div className="banner item2"></div>
            <div className="item2-mask1"></div>
            <div className="item2-mask2"></div>
          </div>
          <div className="header-content">
            <JAWrapper className="discover-a-title text-nowrap">
              人工智能如何改变我们的生活？
            </JAWrapper>
            <JAWrapper className="text-three-nowrap intro">
              什么是人工智能？一台机器如何才能变得能听会说、能理解会思考？人工智能的发展将如何改变我们生活的方方面面？2045
              年未来的世界又是什么样的？一起看看如何用人工智能建设美好世界吧。
            </JAWrapper>
            <div className="info">
              <div>
                <img
                  src="https://pic1.zhimg.com/50/v2-8588c397ef76e531db5a16883813dc4b_720w.jpg?source=b1f6dc53"
                  alt=""
                />
                <img
                  src="https://pic1.zhimg.com/50/v2-fafec20238cdb209713abbc8b20caa55_720w.jpg?source=b1f6dc53"
                  alt=""
                />
                <img
                  src="https://pic3.zhimg.com/50/v2-58633d6a41e40505fa9ac7acddc76f2d_720w.jpg?source=b1f6dc53"
                  alt=""
                />
                <span>3 位嘉宾参与</span>
              </div>
              <div>
                <span>129 人关注</span>
              </div>
            </div>
          </div>
          <div className="follow-btn">
            <div className="btn">关注圆桌</div>
          </div>
        </JItemHeader>
        <JItemContent>
          <div className="question-item">
            <JAWrapper className="question-title text-nowrap">
              什么经历让你「在某一瞬间」真切地意识到科技进步给生活带来的巨大变化？
            </JAWrapper>
            <div className="question-count discover-count">864 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              如何看待多所 985 大学开设人工智能专业？
            </JAWrapper>
            <div className="question-count discover-count">183 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              人工智能是什么？
            </JAWrapper>
            <div className="question-count discover-count">103 个回答</div>
          </div>
        </JItemContent>
      </JItemWrapper>

      <JItemWrapper className="wrapper container-box-shadow">
        <JItemHeader className="item3-wrapper">
          <div className="header-bg">
            <div className="banner item3"></div>
            <div className="item3-mask1"></div>
            <div className="item3-mask2"></div>
          </div>
          <div className="header-content">
            <JAWrapper className="discover-a-title text-nowrap">
              数字人爆火背后
            </JAWrapper>
            <JAWrapper className="text-three-nowrap intro">
              虚拟偶像、虚拟
              KOL、虚拟主持人、虚拟客服...越来越多的数字人开始走到人们面前，以不同的方式影响着我们的生活。数字人犹如一颗冉冉升起的新星，TA
              将去向何方，又能闪耀多久？本次圆桌诚邀科技、AI、营销、泛娱乐等多领域大咖进行多维度的探讨，欢迎知友们一起分享你们独特的视角和观点~
            </JAWrapper>
            <div className="info">
              <div>
                <img
                  src="https://pic1.zhimg.com/50/v2-0bba785e2b3b4038aa4cceb646b2d571_720w.jpg?source=b1f6dc53"
                  alt=""
                />
                <img
                  src="https://pic1.zhimg.com/50/v2-ca6e7ffc10a0d10edbae635cee82d007_720w.jpg?source=b1f6dc53"
                  alt=""
                />
                <img
                  src="https://pic1.zhimg.com/50/e7a5b32f3_720w.jpg?source=b1f6dc53"
                  alt=""
                />
                <span>7 位嘉宾参与</span>
              </div>
              <div>232 人关注</div>
            </div>
          </div>
          <div className="follow-btn">
            <div className="btn">关注圆桌</div>
          </div>
        </JItemHeader>
        <JItemContent>
          <div className="question-item">
            <JAWrapper className="question-title text-nowrap">
              中国首个虚拟学生华智冰加入清华大学，其背后有哪些值得关注的技术亮点？
            </JAWrapper>
            <div className="question-count discover-count">692 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              迅速蹿红的「元宇宙」到底是什么？是「风口」还是「虎口」？元宇宙时代还有多远？
            </JAWrapper>
            <div className="question-count discover-count">381 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              什么是数字人？数字人普及化会是未来生活的趋势吗？
            </JAWrapper>
            <div className="question-count discover-count">47 个回答</div>
          </div>
        </JItemContent>
      </JItemWrapper>

      <JItemWrapper className="wrapper container-box-shadow">
        <JItemHeader className="item4-wrapper">
          <div className="header-bg">
            <div className="banner item4"></div>
            <div className="item4-mask1"></div>
            <div className="item4-mask2"></div>
          </div>
          <div className="header-content">
            <JAWrapper className="discover-a-title text-nowrap">
              汽车架构就是造车「秘籍」吗？
            </JAWrapper>
            <JAWrapper className="text-three-nowrap intro">
              汽车从曾经的贵族奢侈品，到如今成为普通人的重要出行工具，从最初的手工作坊式生产，到如今平台化、架构化生产，离不开造车技术的发展。当代造车都有哪些模块化平台？燃油车和新能源汽车的架构有何不同？电子电气架构有哪些关键技术正在发展？欢迎关注本场圆桌参与讨论。
            </JAWrapper>
            <div className="info">
              <div>0 位嘉宾参与</div>
              <div>101 人关注</div>
            </div>
          </div>
          <div className="follow-btn">
            <div className="btn">关注圆桌</div>
          </div>
        </JItemHeader>
        <JItemContent>
          <div className="question-item">
            <JAWrapper className="question-title text-nowrap">
              智能汽车发展将对整车电子电气架构带来什么样的影响？
            </JAWrapper>
            <div className="question-count discover-count">4 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              自主品牌汽车尝试「平台化」的前景如何？
            </JAWrapper>
            <div className="question-count discover-count">14 个回答</div>
          </div>
          <div className="question-item item-margin-top">
            <JAWrapper className="question-title text-nowrap">
              目前市场上都有哪些主流汽车平台？分别各有什么特点？
            </JAWrapper>
            <div className="question-count discover-count">3 个回答</div>
          </div>
        </JItemContent>
      </JItemWrapper>
    </JDiscoverDiscussItemWrapper>
  );
});
