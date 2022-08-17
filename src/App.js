import React from 'react';
import { Layout, Menu, Card, List, Typography } from 'antd';
import data from './data.json';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
    const commonTags = [];
    data.recipients.forEach(outerItem => {
        data.recipients.forEach(innerItem => {
            const common = outerItem.tags.filter(value => innerItem.tags.includes(value));
            if (common.length > 1 && outerItem.name !== innerItem.name) {
                commonTags.push(`${outerItem.name},${innerItem.name}`);
            }
        })
    })
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <Title level={2}>A list of each pair of names which have 2 or more tags in common</Title>
                        <Title level={5}>
                            {
                                commonTags.join("|")
                            }
                        </Title>
                        {/* <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 3,
                            }}
                            dataSource={commonTags}
                            renderItem={item => (
                                <List.Item>
                                    <Card>{item}</Card>
                                </List.Item>
                            )}
                        /> */}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by Mahdi 2022</Footer>
            </Layout>
        </>
    );
}

export default App;
