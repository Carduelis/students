import React, { Component } from 'react';
import Heading from '../components/Heading';
import Card from '../common/Card';
import Page from '../common/PageWrapper';

export default class extends Component {
	renderJSON(jsonHtml = jsonHtmlRoot) {
		return jsonHtml.map(item => {
			if (item.type === 'Element') {
				if (item.tagName === 'br') {
					return <br />;
				}
				if (item.tagName === 'img') {
					return <img alt={item.attributes.alt} src={item.attributes.src} />;
				}
				return (
					<item.tagName key={Math.random()}>
					{this.renderJSON(item.children)}
					</item.tagName>
				);
			} else if (item.type === 'Text') {
				return item.content;
			}
		});
	}
	// {this.renderJSON()}

	render() {
		const Figure = ({ src, title, description, className }) => (
			<figure className={className}>
				<img src={src} alt={title} />
				<figcaption>
					<i>{description}</i>
				</figcaption>
			</figure>
		);
		return (
			<Page title="Об университете" subtitle="История создания и развитие">
				<section className="content-section">
					<h3>История университета</h3>
					<h4>До постройки кампуса на проспекте Вернадского</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Figure title="Кек" src="//placecage.com/300/200" description="Nicolas Cage rem ipsum dolor sit amet, consectetur adipisicing elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
					<ol>
						<li>One</li>
						<li>ore eu fugiat nulla pariatur.</li>
						<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa
						qui officia deserunt mollit anim id est laborum.</li>
						<li>Three</li>
						<li>
							<p>fjsdfjsdf</p>
							<ol>
								<li>One</li>
								<li>ore eu fugiat nulla pariatur.
								Excepteur sint occaecat cupidatat non proident, sunt in culpa
								qui officia deserunt mollit anim id est laborum.</li>
								<li>Three</li>
							</ol>
						</li>
					</ol>
					<h4>Еще один подзаголовок</h4>
					<h5>Подподзаголовок</h5>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<h5>Подподзаголовок</h5>
					<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum.
					</p>
					<blockquote className="silent">
						Excepteur sint occaecat cupidatat non proident, sunt in culpa
						qui officia deserunt mollit anim id est laborum.
						<small>&mdash; Сергей Дружко</small>
					</blockquote>
					<Figure className="accent" title="Кек" src="//placecage.com/300/200" description="Nicolas Cage rem ipsum dolor sit amet, consectetur adipisicing elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
					<ol>
						<li>One</li>
						<li>ore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa
						qui officia deserunt mollit anim id est laborum.</li>
						<li>Three</li>
					</ol>
				</section>
				<section className="content-section">
					<h3>Label</h3>
					<Figure className="accent" title="Кек" src="//placecage.com/200/200" description="Nicolas Cage rem ipsum dolor sit amet, consectetur adipisicing elsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum.
					</p>
				</section>
				<section className="content-section">
					<Heading label="Section" />
					<h3>Label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa
					qui officia deserunt mollit anim id est laborum.
					</p>
				</section>
			</Page>
		);
	}
}
/* eslint-disable */
const jsonHtmlRoot0 = [
	{
		type: 'Element',
		tagName: 'h3',
		attributes: {
			className: 'kek',
			href: 'jeje'
		},
		children: [{
			type: 'Text',
			content: 'Заголовок третьего уровня'
		}]
	}, {
		type: 'Element',
		tagName: 'p',
		attributes: {
			className: 'kek',
			href: 'jeje'
		},
		children: [{
			type: 'Text',
			content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		}]
	}, {
		type: 'Element',
		tagName: 'div',
		attributes: {
			className: 'kek',
			href: 'jeje'
		},
		children: [{
			type: 'Element',
			tagName: 'h4',
			attributes: {
				className: 'kek',
				href: 'jeje'
			},
			children: [{
				type: 'Text',
				content: 'Заголовок четвертого уровня'
			}]
		}, {
			type: 'Element',
			tagName: 'p',
			attributes: {
				className: 'kek',
				href: 'jeje'
			},
			children: [{
				type: 'Text',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
			}]
		}]
	}
];

const jsonHtmlRoot = [{
	"type": "Element",
	"tagName": "div",
	"attributes": {
		"dataset": {
			"reactroot": ""
		},
		"className": ["react-native-web"]
	},
	"children": [{
		"type": "Element",
		"tagName": "div",
		"attributes": {
			"className": ["header"]
		},
		"children": [{
			"type": "Element",
			"tagName": "div",
			"attributes": {
				"className": ["header-bar-substrate"]
			},
			"children": [{
				"type": "Element",
				"tagName": "div",
				"attributes": {
					"className": ["header-bar", "fixed"]
				},
				"children": [{
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["header-bar-left"]
					},
					"children": [{
						"type": "Element",
						"tagName": "button",
						"attributes": {
							"className": ["btn", "btn-sm"],
							"type": "button"
						},
						"children": [{
							"type": "Element",
							"tagName": "canvas",
							"attributes": {
								"className": ["ink"],
								"height": 0,
								"width": 0,
								"style": {
									"borderRadius": "inherit",
									"height": "100%",
									"left": "0px",
									"position": "absolute",
									"top": "0px",
									"width": "100%"
								}
							},
							"children": []
						}, {
							"type": "Element",
							"tagName": "svg",
							"attributes": {
								"fill": "currentColor",
								"preserveAspectRatio": "xMidYMid meet",
								"height": 32,
								"width": 32,
								"viewBox": "0 0 40 40",
								"style": {
									"verticalAlign": "middle"
								}
							},
							"children": [{
								"type": "Element",
								"tagName": "g",
								"attributes": {},
								"children": [{
									"type": "Element",
									"tagName": "path",
									"attributes": {
										"d": "m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z"
									},
									"children": []
								}]
							}]
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["header-bar-center"]
					},
					"children": [{
						"type": "Element",
						"tagName": "span",
						"attributes": {},
						"children": [{
							"type": "Text",
							"content": "Welcome to my site!"
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["header-bar-right"]
					},
					"children": [{
						"type": "Element",
						"tagName": "button",
						"attributes": {
							"className": ["btn", "btn-sm"],
							"type": "button"
						},
						"children": [{
							"type": "Element",
							"tagName": "canvas",
							"attributes": {
								"className": ["ink"],
								"height": 0,
								"width": 0,
								"style": {
									"borderRadius": "inherit",
									"height": "100%",
									"left": "0px",
									"position": "absolute",
									"top": "0px",
									"width": "100%"
								}
							},
							"children": []
						}, {
							"type": "Element",
							"tagName": "svg",
							"attributes": {
								"fill": "currentColor",
								"preserveAspectRatio": "xMidYMid meet",
								"height": 32,
								"width": 32,
								"viewBox": "0 0 40 40",
								"style": {
									"verticalAlign": "middle"
								}
							},
							"children": [{
								"type": "Element",
								"tagName": "g",
								"attributes": {},
								"children": [{
									"type": "Element",
									"tagName": "path",
									"attributes": {
										"d": "m20 32c4.1 0 7.8-2.2 10-5.4-0.1-3.2-6.7-5.1-10-5.1-3.4 0-9.9 1.9-10 5.1 2.2 3.2 5.9 5.4 10 5.4z m0-23.6c-2.7 0-5 2.2-5 5s2.3 5 5 5 5-2.3 5-5-2.3-5-5-5z m0-5c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z"
									},
									"children": []
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}, {
		"type": "Element",
		"tagName": "div",
		"attributes": {
			"className": ["root"],
			"role": "navigation"
		},
		"children": [{
			"type": "Element",
			"tagName": "div",
			"attributes": {
				"className": ["sidebar"],
				"style": {
					"left": "0px",
					"transform": "translateX(-100%)"
				}
			},
			"children": [{
				"type": "Element",
				"tagName": "div",
				"attributes": {},
				"children": [{
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["header-bar-substrate"]
					},
					"children": []
				}, {
					"type": "Element",
					"tagName": "header",
					"attributes": {
						"className": ["centered", "title", "title-sm", "title-center"]
					},
					"children": [{
						"type": "Element",
						"tagName": "h2",
						"attributes": {},
						"children": [{
							"type": "Comment",
							"content": " react-text: 25 "
						}, {
							"type": "Text",
							"content": "Curriculum Vitae"
						}, {
							"type": "Comment",
							"content": " /react-text "
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["btn-group"]
					},
					"children": [{
						"type": "Element",
						"tagName": "a",
						"attributes": {
							"className": ["btn", "btn-bordered"],
							"download": "",
							"href": "/assets/files/en.pdf"
						},
						"children": [{
							"type": "Element",
							"tagName": "span",
							"attributes": {
								"className": ["label"]
							},
							"children": [{
								"type": "Comment",
								"content": " react-text: 29 "
							}, {
								"type": "Text",
								"content": "CV "
							}, {
								"type": "Comment",
								"content": " /react-text "
							}, {
								"type": "Element",
								"tagName": "small",
								"attributes": {},
								"children": [{
									"type": "Text",
									"content": "(en)"
								}]
							}]
						}]
					}, {
						"type": "Element",
						"tagName": "a",
						"attributes": {
							"className": ["btn", "btn-bordered"],
							"download": "",
							"href": "/assets/files/ru.pdf"
						},
						"children": [{
							"type": "Element",
							"tagName": "span",
							"attributes": {
								"className": ["label"]
							},
							"children": [{
								"type": "Text",
								"content": "По-русски"
							}]
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "header",
					"attributes": {
						"className": ["centered", "title", "title-sm", "title-center"]
					},
					"children": [{
						"type": "Element",
						"tagName": "h2",
						"attributes": {},
						"children": [{
							"type": "Comment",
							"content": " react-text: 35 "
						}, {
							"type": "Text",
							"content": "Social Networks"
						}, {
							"type": "Comment",
							"content": " /react-text "
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["nav-list"]
					},
					"children": [{
						"type": "Element",
						"tagName": "div",
						"attributes": {
							"className": ["nav-item", "nav-item-link"]
						},
						"children": [{
							"type": "Element",
							"tagName": "a",
							"attributes": {
								"className": ["label"],
								"href": "//github.com/Carduelis",
								"target": "_blank"
							},
							"children": [{
								"type": "Text",
								"content": "Github"
							}]
						}]
					}, {
						"type": "Element",
						"tagName": "div",
						"attributes": {
							"className": ["nav-item", "nav-item-link"]
						},
						"children": [{
							"type": "Element",
							"tagName": "a",
							"attributes": {
								"className": ["label"],
								"href": "//vk.com/pavepy",
								"target": "_blank"
							},
							"children": [{
								"type": "Text",
								"content": "Vk.com"
							}]
						}]
					}, {
						"type": "Element",
						"tagName": "div",
						"attributes": {
							"className": ["nav-item", "nav-item-link"]
						},
						"children": [{
							"type": "Element",
							"tagName": "a",
							"attributes": {
								"className": ["label"],
								"href": "//instagram.com/Carduelis_first",
								"target": "_blank"
							},
							"children": [{
								"type": "Text",
								"content": "Instagram"
							}]
						}]
					}]
				}]
			}]
		}, {
			"type": "Element",
			"tagName": "div",
			"attributes": {
				"className": ["sidebar-backdrop"],
				"role": "presentation",
				"tabindex": 0
			},
			"children": []
		}, {
			"type": "Element",
			"tagName": "div",
			"attributes": {},
			"children": []
		}]
	}, {
		"type": "Element",
		"tagName": "div",
		"attributes": {
			"className": ["main-content-wrapper"]
		},
		"children": [{
			"type": "Element",
			"tagName": "div",
			"attributes": {
				"className": ["main-content"]
			},
			"children": [{
				"type": "Element",
				"tagName": "div",
				"attributes": {},
				"children": [{
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["content"]
					},
					"children": [{
						"type": "Element",
						"tagName": "div",
						"attributes": {
							"className": ["about-me"]
						},
						"children": [{
							"type": "Element",
							"tagName": "header",
							"attributes": {
								"className": ["centered"]
							},
							"children": [{
								"type": "Element",
								"tagName": "h1",
								"attributes": {},
								"children": [{
									"type": "Comment",
									"content": " react-text: 52 "
								}, {
									"type": "Text",
									"content": "Hey, I"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Comment",
									"content": " react-text: 53 "
								}, {
									"type": "Text",
									"content": "'"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Comment",
									"content": " react-text: 54 "
								}, {
									"type": "Text",
									"content": "m Pavel!"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}]
							}, {
								"type": "Element",
								"tagName": "h3",
								"attributes": {},
								"children": [{
									"type": "Text",
									"content": "Front-end developer and UI&nbsp;designer"
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["row"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["col-sm-1", "mobile-hide"]
									},
									"children": []
								}, {
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["col-sm-3", "mobile-hide"]
									},
									"children": [{
										"type": "Element",
										"tagName": "header",
										"attributes": {
											"className": ["centered", "title", "title-center"]
										},
										"children": [{
											"type": "Element",
											"tagName": "h2",
											"attributes": {},
											"children": [{
												"type": "Comment",
												"content": " react-text: 61 "
											}, {
												"type": "Text",
												"content": "Social Networks"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}]
										}]
									}, {
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["nav-list"]
										},
										"children": [{
											"type": "Element",
											"tagName": "div",
											"attributes": {
												"className": ["nav-item", "nav-item-link"]
											},
											"children": [{
												"type": "Element",
												"tagName": "a",
												"attributes": {
													"className": ["label"],
													"href": "//github.com/Carduelis",
													"target": "_blank"
												},
												"children": [{
													"type": "Text",
													"content": "Github"
												}]
											}]
										}, {
											"type": "Element",
											"tagName": "div",
											"attributes": {
												"className": ["nav-item", "nav-item-link"]
											},
											"children": [{
												"type": "Element",
												"tagName": "a",
												"attributes": {
													"className": ["label"],
													"href": "//vk.com/pavepy",
													"target": "_blank"
												},
												"children": [{
													"type": "Text",
													"content": "Vk.com"
												}]
											}]
										}, {
											"type": "Element",
											"tagName": "div",
											"attributes": {
												"className": ["nav-item", "nav-item-link"]
											},
											"children": [{
												"type": "Element",
												"tagName": "a",
												"attributes": {
													"className": ["label"],
													"href": "//instagram.com/Carduelis_first",
													"target": "_blank"
												},
												"children": [{
													"type": "Text",
													"content": "Instagram"
												}]
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["col-sm-4", "mobile-center"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["avatar"]
										},
										"children": [{
											"type": "Element",
											"tagName": "img",
											"attributes": {
												"alt": "me",
												"src": "https://pp.userapi.com/c837130/v837130013/2d76b/j93H1raEAng.jpg"
											},
											"children": []
										}]
									}, {
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["text"]
										},
										"children": [{
											"type": "Element",
											"tagName": "p",
											"attributes": {
												"className": ["full-name"]
											},
											"children": [{
												"type": "Comment",
												"content": " react-text: 74 "
											}, {
												"type": "Text",
												"content": "Full name:&nbsp;"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}, {
												"type": "Element",
												"tagName": "b",
												"attributes": {},
												"children": [{
													"type": "Text",
													"content": "Pavel"
												}]
											}, {
												"type": "Comment",
												"content": " react-text: 76 "
											}, {
												"type": "Text",
												"content": " Shchegolev"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}]
										}, {
											"type": "Element",
											"tagName": "p",
											"attributes": {
												"className": ["age"]
											},
											"children": [{
												"type": "Comment",
												"content": " react-text: 78 "
											}, {
												"type": "Text",
												"content": "Age:&nbsp;"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}, {
												"type": "Element",
												"tagName": "b",
												"attributes": {},
												"children": [{
													"type": "Comment",
													"content": " react-text: 80 "
												}, {
													"type": "Text",
													"content": "24"
												}, {
													"type": "Comment",
													"content": " /react-text "
												}, {
													"type": "Comment",
													"content": " react-text: 81 "
												}, {
													"type": "Text",
													"content": " years"
												}, {
													"type": "Comment",
													"content": " /react-text "
												}]
											}, {
												"type": "Comment",
												"content": " react-text: 82 "
											}, {
												"type": "Text",
												"content": ", "
											}, {
												"type": "Comment",
												"content": " /react-text "
											}, {
												"type": "Comment",
												"content": " react-text: 83 "
											}, {
												"type": "Text",
												"content": "8"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}, {
												"type": "Comment",
												"content": " react-text: 84 "
											}, {
												"type": "Text",
												"content": " months and "
											}, {
												"type": "Comment",
												"content": " /react-text "
											}, {
												"type": "Comment",
												"content": " react-text: 85 "
											}, {
												"type": "Text",
												"content": "15"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}, {
												"type": "Comment",
												"content": " react-text: 86 "
											}, {
												"type": "Text",
												"content": " days"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["col-sm-3", "mobile-hide"]
									},
									"children": [{
										"type": "Element",
										"tagName": "header",
										"attributes": {
											"className": ["centered", "title", "title-center"]
										},
										"children": [{
											"type": "Element",
											"tagName": "h2",
											"attributes": {},
											"children": [{
												"type": "Comment",
												"content": " react-text: 90 "
											}, {
												"type": "Text",
												"content": "Curriculum Vitae"
											}, {
												"type": "Comment",
												"content": " /react-text "
											}]
										}]
									}, {
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["btn-group"]
										},
										"children": [{
											"type": "Element",
											"tagName": "a",
											"attributes": {
												"className": ["btn", "btn-bordered"],
												"download": "",
												"href": "/assets/files/en.pdf"
											},
											"children": [{
												"type": "Element",
												"tagName": "span",
												"attributes": {
													"className": ["label"]
												},
												"children": [{
													"type": "Comment",
													"content": " react-text: 94 "
												}, {
													"type": "Text",
													"content": "CV "
												}, {
													"type": "Comment",
													"content": " /react-text "
												}, {
													"type": "Element",
													"tagName": "small",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "(en)"
													}]
												}]
											}]
										}, {
											"type": "Element",
											"tagName": "a",
											"attributes": {
												"className": ["btn", "btn-bordered"],
												"download": "",
												"href": "/assets/files/ru.pdf"
											},
											"children": [{
												"type": "Element",
												"tagName": "span",
												"attributes": {
													"className": ["label"]
												},
												"children": [{
													"type": "Text",
													"content": "По-русски"
												}]
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["col-sm-1", "mobile-hide"]
									},
									"children": []
								}]
							}]
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["overflow-scrolling", "columns-custom-wrapper"]
					},
					"children": [{
						"type": "Element",
						"tagName": "div",
						"attributes": {
							"className": ["columns", "columns-custom"]
						},
						"children": [{
							"type": "Element",
							"tagName": "div",
							"attributes": {
								"className": ["column", "skew"]
							},
							"children": [{
								"type": "Element",
								"tagName": "header",
								"attributes": {
									"className": ["centered", "title", "title-center"]
								},
								"children": [{
									"type": "Element",
									"tagName": "h2",
									"attributes": {},
									"children": [{
										"type": "Element",
										"tagName": "span",
										"attributes": {
											"className": ["icon-lg"]
										},
										"children": [{
											"type": "Element",
											"tagName": "svg",
											"attributes": {
												"fill": "currentColor",
												"preserveAspectRatio": "xMidYMid meet",
												"height": "1em",
												"width": "1em",
												"viewBox": "0 0 40 40",
												"style": {
													"verticalAlign": "middle"
												}
											},
											"children": [{
												"type": "Element",
												"tagName": "g",
												"attributes": {},
												"children": [{
													"type": "Element",
													"tagName": "path",
													"attributes": {
														"d": "m20 5l18.4 10v13.4h-3.4v-11.6l-15 8.2-18.4-10z m-11.6 17l11.6 6.4 11.6-6.4v6.7l-11.6 6.3-11.6-6.3v-6.7z"
													},
													"children": []
												}]
											}]
										}]
									}, {
										"type": "Element",
										"tagName": "br",
										"attributes": {},
										"children": []
									}, {
										"type": "Comment",
										"content": " react-text: 109 "
									}, {
										"type": "Text",
										"content": "Education"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "p",
								"attributes": {},
								"children": [{
									"type": "Comment",
									"content": " react-text: 111 "
								}, {
									"type": "Text",
									"content": "I am a&nbsp;"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "b",
									"attributes": {},
									"children": [{
										"type": "Element",
										"tagName": "abbr",
										"attributes": {
											"title": "Upper bachelor degree"
										},
										"children": [{
											"type": "Text",
											"content": "specialist"
										}]
									}, {
										"type": "Comment",
										"content": " react-text: 114 "
									}, {
										"type": "Text",
										"content": " in Computer science"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 115 "
								}, {
									"type": "Text",
									"content": ", graduated from&nbsp;"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "a",
									"attributes": {
										"className": ["silent"],
										"href": "//english.mirea.ru",
										"rel": "noopener noreferrer",
										"target": "_blank"
									},
									"children": [{
										"type": "Text",
										"content": "Moscow Technological University"
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 117 "
								}, {
									"type": "Text",
									"content": " with a GPA of "
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "nobr",
									"attributes": {},
									"children": [{
										"type": "Text",
										"content": "4.98 out of 5"
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 119 "
								}, {
									"type": "Text",
									"content": "."
								}, {
									"type": "Comment",
									"content": " /react-text "
								}]
							}, {
								"type": "Element",
								"tagName": "p",
								"attributes": {
									"className": ["silent", "small"]
								},
								"children": [{
									"type": "Text",
									"content": "Apart from that I have published several scientific papers and a textbook with a study guide for internal use. I have alose participated in organization of academic conferences in the University."
								}]
							}]
						}, {
							"type": "Element",
							"tagName": "div",
							"attributes": {
								"className": ["column", "skew"]
							},
							"children": [{
								"type": "Element",
								"tagName": "header",
								"attributes": {
									"className": ["centered", "title", "title-center"]
								},
								"children": [{
									"type": "Element",
									"tagName": "h2",
									"attributes": {},
									"children": [{
										"type": "Element",
										"tagName": "span",
										"attributes": {
											"className": ["icon-lg"]
										},
										"children": [{
											"type": "Element",
											"tagName": "svg",
											"attributes": {
												"fill": "currentColor",
												"preserveAspectRatio": "xMidYMid meet",
												"height": "1em",
												"width": "1em",
												"viewBox": "0 0 40 40",
												"style": {
													"verticalAlign": "middle"
												}
											},
											"children": [{
												"type": "Element",
												"tagName": "g",
												"attributes": {},
												"children": [{
													"type": "Element",
													"tagName": "path",
													"attributes": {
														"d": "m23.4 11.6v-3.2h-6.8v3.2h6.8z m10 0c1.8 0 3.2 1.6 3.2 3.4v5c0 1.8-1.4 3.4-3.2 3.4h-10v-3.4h-6.8v3.4h-10c-1.8 0-3.2-1.5-3.2-3.4v-5c0-1.8 1.4-3.4 3.2-3.4h6.7v-3.2l3.3-3.4h6.7l3.3 3.4v3.2h6.8z m-16.8 15h6.8v-1.6h11.6v6.6c0 1.9-1.5 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.5-3.4-3.4v-6.6h11.6v1.6z"
													},
													"children": []
												}]
											}]
										}]
									}, {
										"type": "Element",
										"tagName": "br",
										"attributes": {},
										"children": []
									}, {
										"type": "Comment",
										"content": " react-text: 129 "
									}, {
										"type": "Text",
										"content": "Work Experience"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "p",
								"attributes": {},
								"children": [{
									"type": "Comment",
									"content": " react-text: 131 "
								}, {
									"type": "Text",
									"content": "I started in the distant 2010, so I have "
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "b",
									"attributes": {
										"className": ["accent"]
									},
									"children": [{
										"type": "Comment",
										"content": " react-text: 133 "
									}, {
										"type": "Text",
										"content": "more than&nbsp;"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Comment",
										"content": " react-text: 134 "
									}, {
										"type": "Text",
										"content": "6"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Comment",
										"content": " react-text: 135 "
									}, {
										"type": "Text",
										"content": " years"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 136 "
								}, {
									"type": "Text",
									"content": ". I have about 3 years of freelance work experience."
								}, {
									"type": "Comment",
									"content": " /react-text "
								}]
							}, {
								"type": "Element",
								"tagName": "p",
								"attributes": {},
								"children": [{
									"type": "Comment",
									"content": " react-text: 138 "
								}, {
									"type": "Text",
									"content": "From 2013 to 2015 I have developed more than&nbsp;"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "b",
									"attributes": {
										"className": ["accent"]
									},
									"children": [{
										"type": "Text",
										"content": "40&nbsp;mobile&nbsp;websites"
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 140 "
								}, {
									"type": "Text",
									"content": "."
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "br",
									"attributes": {},
									"children": []
								}, {
									"type": "Comment",
									"content": " react-text: 142 "
								}, {
									"type": "Text",
									"content": "Thanks to "
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "a",
									"attributes": {
										"className": ["silent"],
										"href": "//eski.mobi/worx",
										"rel": "noopener noreferrer",
										"target": "_blank"
									},
									"children": [{
										"type": "Text",
										"content": "eski.mobi"
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 144 "
								}, {
									"type": "Text",
									"content": "!"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}]
							}, {
								"type": "Element",
								"tagName": "p",
								"attributes": {},
								"children": [{
									"type": "Comment",
									"content": " react-text: 146 "
								}, {
									"type": "Text",
									"content": "Since 2015 I have been working at MTU developing Information-analytical systems (GIS, FAIP, Universities Data Bank) for "
								}, {
									"type": "Comment",
									"content": " /react-text "
								}, {
									"type": "Element",
									"tagName": "b",
									"attributes": {
										"className": ["accent"]
									},
									"children": [{
										"type": "Text",
										"content": "Ministry of Education and Science"
									}]
								}, {
									"type": "Comment",
									"content": " react-text: 148 "
								}, {
									"type": "Text",
									"content": " of Russia"
								}, {
									"type": "Comment",
									"content": " /react-text "
								}]
							}]
						}, {
							"type": "Element",
							"tagName": "div",
							"attributes": {
								"className": ["column", "skew"]
							},
							"children": [{
								"type": "Element",
								"tagName": "header",
								"attributes": {
									"className": ["centered", "title", "title-center"]
								},
								"children": [{
									"type": "Element",
									"tagName": "h2",
									"attributes": {},
									"children": [{
										"type": "Element",
										"tagName": "span",
										"attributes": {
											"className": ["icon-lg"]
										},
										"children": [{
											"type": "Element",
											"tagName": "svg",
											"attributes": {
												"fill": "currentColor",
												"preserveAspectRatio": "xMidYMid meet",
												"height": "1em",
												"width": "1em",
												"viewBox": "0 0 40 40",
												"style": {
													"verticalAlign": "middle"
												}
											},
											"children": [{
												"type": "Element",
												"tagName": "g",
												"attributes": {},
												"children": [{
													"type": "Element",
													"tagName": "path",
													"attributes": {
														"d": "m20 35.5l-2.4-2.1c-8.6-7.9-14.2-12.9-14.2-19.3 0-5.1 3.9-9.1 9.1-9.1 2.9 0 5.7 1.4 7.5 3.5 1.8-2.1 4.6-3.5 7.5-3.5 5.2 0 9.1 4 9.1 9.1 0 6.4-5.6 11.5-14.2 19.3z"
													},
													"children": []
												}]
											}]
										}]
									}, {
										"type": "Element",
										"tagName": "br",
										"attributes": {},
										"children": []
									}, {
										"type": "Comment",
										"content": " react-text: 157 "
									}, {
										"type": "Text",
										"content": "Make me happy"
									}, {
										"type": "Comment",
										"content": " /react-text "
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "p",
								"attributes": {},
								"children": [{
									"type": "Text",
									"content": "Exploring new business ideas and opportunities"
								}]
							}, {
								"type": "Element",
								"tagName": "ul",
								"attributes": {},
								"children": [{
									"type": "Element",
									"tagName": "li",
									"attributes": {},
									"children": [{
										"type": "Comment",
										"content": " react-text: 161 "
									}, {
										"type": "Text",
										"content": "Design and Front-end "
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Element",
										"tagName": "svg",
										"attributes": {
											"fill": "currentColor",
											"preserveAspectRatio": "xMidYMid meet",
											"height": "1em",
											"width": "1em",
											"viewBox": "0 0 40 40",
											"style": {
												"verticalAlign": "middle"
											}
										},
										"children": [{
											"type": "Element",
											"tagName": "g",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "path",
												"attributes": {
													"d": "m20 29.1q-2.9 0-5.2-1.6t-3.3-4.1h17q-1 2.5-3.3 4.1t-5.2 1.6z m-5.9-10.7q-1 0-1.7-0.8t-0.8-1.7 0.8-1.8 1.7-0.7 1.8 0.7 0.7 1.8-0.7 1.7-1.8 0.8z m11.8 0q-1.1 0-1.8-0.8t-0.7-1.7 0.7-1.8 1.8-0.7 1.7 0.7 0.8 1.8-0.8 1.7-1.7 0.8z m-5.9 15q5.5 0 9.4-4t4-9.4-4-9.4-9.4-4-9.4 4-4 9.4 4 9.4 9.4 4z m0-30q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z"
												},
												"children": []
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "li",
									"attributes": {},
									"children": [{
										"type": "Comment",
										"content": " react-text: 166 "
									}, {
										"type": "Text",
										"content": "Espresso "
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Element",
										"tagName": "svg",
										"attributes": {
											"fill": "currentColor",
											"preserveAspectRatio": "xMidYMid meet",
											"height": "1em",
											"width": "1em",
											"viewBox": "0 0 40 40",
											"style": {
												"verticalAlign": "middle"
											}
										},
										"children": [{
											"type": "Element",
											"tagName": "g",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "path",
												"attributes": {
													"d": "m6.6 31.6h26.8v3.4h-26.8v-3.4z m26.8-18.2v-5h-3.4v5h3.4z m0-8.4c1.8 0 3.2 1.5 3.2 3.4v5c0 1.8-1.4 3.2-3.2 3.2h-3.4v5c0 3.7-3 6.8-6.6 6.8h-10c-3.7 0-6.8-3.1-6.8-6.8v-16.6h26.8z"
												},
												"children": []
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "li",
									"attributes": {},
									"children": [{
										"type": "Comment",
										"content": " react-text: 171 "
									}, {
										"type": "Text",
										"content": "Cycling "
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Element",
										"tagName": "svg",
										"attributes": {
											"fill": "currentColor",
											"preserveAspectRatio": "xMidYMid meet",
											"height": "1em",
											"width": "1em",
											"viewBox": "0 0 40 40",
											"style": {
												"verticalAlign": "middle"
											}
										},
										"children": [{
											"type": "Element",
											"tagName": "g",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "path",
												"attributes": {
													"d": "m31.6 34.1c3.2 0 5.9-2.5 5.9-5.7s-2.7-5.9-5.9-5.9-5.7 2.7-5.7 5.9 2.5 5.7 5.7 5.7z m0-14.1c4.7 0 8.4 3.7 8.4 8.4s-3.7 8.2-8.4 8.2-8.2-3.6-8.2-8.2 3.6-8.4 8.2-8.4z m-13.6-2.5l3.6 3.8v10.3h-3.2v-8.2l-5.4-4.7c-0.7-0.5-1-1.4-1-2.4 0-0.8 0.3-1.6 1-2.3l4.7-4.7c0.4-0.7 1.3-0.9 2.3-0.9s1.8 0.2 2.7 0.9l3.2 3.2c1.4 1.5 3.4 2.5 5.9 2.5v3.4c-3.5 0-6.3-1.4-8.4-3.6l-1.4-1.3z m-9.6 16.6c3.2 0 5.7-2.5 5.7-5.7s-2.5-5.9-5.7-5.9-5.9 2.7-5.9 5.9 2.7 5.7 5.9 5.7z m0-14.1c4.7 0 8.2 3.7 8.2 8.4s-3.5 8.2-8.2 8.2-8.4-3.6-8.4-8.2 3.7-8.4 8.4-8.4z m17.5-10.9c-1.8 0-3.4-1.4-3.4-3.2s1.6-3.4 3.4-3.4 3.2 1.6 3.2 3.4-1.4 3.2-3.2 3.2z"
												},
												"children": []
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "li",
									"attributes": {},
									"children": [{
										"type": "Comment",
										"content": " react-text: 176 "
									}, {
										"type": "Text",
										"content": "Music "
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Element",
										"tagName": "svg",
										"attributes": {
											"fill": "currentColor",
											"preserveAspectRatio": "xMidYMid meet",
											"height": "1em",
											"width": "1em",
											"viewBox": "0 0 40 40",
											"style": {
												"verticalAlign": "middle"
											}
										},
										"children": [{
											"type": "Element",
											"tagName": "g",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "path",
												"attributes": {
													"d": "m20 5h10v6.6h-6.6v16.8c0 3.6-3.1 6.6-6.8 6.6s-6.6-3-6.6-6.6 3-6.8 6.6-6.8c1.3 0 2.4 0.4 3.4 1v-17.6z"
												},
												"children": []
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "li",
									"attributes": {},
									"children": [{
										"type": "Comment",
										"content": " react-text: 181 "
									}, {
										"type": "Text",
										"content": "Eggs and bacon "
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Element",
										"tagName": "svg",
										"attributes": {
											"fill": "currentColor",
											"preserveAspectRatio": "xMidYMid meet",
											"height": "1em",
											"width": "1em",
											"viewBox": "0 0 40 40",
											"style": {
												"verticalAlign": "middle"
											}
										},
										"children": [{
											"type": "Element",
											"tagName": "g",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "path",
												"attributes": {
													"d": "m24.8 19.2l-2.5 2.4 11.5 11.5-2.3 2.4-11.5-11.5-11.5 11.5-2.3-2.4 16.2-16.2q-0.9-1.9-0.3-4.4t2.7-4.5q2.4-2.4 5.4-2.7t4.7 1.4 1.5 4.8-2.8 5.5q-2 1.9-4.5 2.5t-4.3-0.3z m-11.3 3.1l-7-7.1q-2-1.9-2-4.7t2-4.6l11.7 11.6z"
												},
												"children": []
											}]
										}]
									}]
								}, {
									"type": "Element",
									"tagName": "li",
									"attributes": {},
									"children": [{
										"type": "Comment",
										"content": " react-text: 186 "
									}, {
										"type": "Text",
										"content": "Gadgets and DIY "
									}, {
										"type": "Comment",
										"content": " /react-text "
									}, {
										"type": "Element",
										"tagName": "svg",
										"attributes": {
											"fill": "currentColor",
											"preserveAspectRatio": "xMidYMid meet",
											"height": "1em",
											"width": "1em",
											"viewBox": "0 0 40 40",
											"style": {
												"verticalAlign": "middle"
											}
										},
										"children": [{
											"type": "Element",
											"tagName": "g",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "path",
												"attributes": {
													"d": "m35 30v-13.4h-6.6v13.4h6.6z m1.6-16.6c0.9 0 1.8 0.7 1.8 1.6v16.6c0 0.9-0.9 1.8-1.8 1.8h-10c-0.8 0-1.6-0.9-1.6-1.8v-16.6c0-0.9 0.8-1.6 1.6-1.6h10z m-18.2 15.7c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m3.2-9.1v3c1.1 0.9 1.8 2.2 1.8 3.6s-0.7 2.9-1.8 3.8v3h-6.6v-3c-1-0.9-1.6-2.3-1.6-3.8s0.6-2.7 1.6-3.6v-3h6.6z m-16.6-10v20h6.6v3.4h-6.6c-1.8 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.6-3.4 3.4-3.4h30v3.4h-30z"
												},
												"children": []
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["separator"]
					},
					"children": [{
						"type": "Element",
						"tagName": "div",
						"attributes": {
							"className": ["separator-line"]
						},
						"children": [{
							"type": "Element",
							"tagName": "svg",
							"attributes": {
								"fill": "currentColor",
								"preserveAspectRatio": "xMidYMid meet",
								"height": "1em",
								"width": "1em",
								"viewBox": "0 0 40 40",
								"style": {
									"verticalAlign": "middle"
								}
							},
							"children": [{
								"type": "Element",
								"tagName": "g",
								"attributes": {},
								"children": [{
									"type": "Element",
									"tagName": "path",
									"attributes": {
										"d": "m31 11c5 0 9 4.1 9 9s-4 9-9 9c-2.4 0-4.7-1-6.4-2.7l-2.1-1.8 2.5-2.2 1.9 1.6c1.2 1.2 2.6 1.7 4.1 1.7 3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6c-1.5 0-2.9 0.5-4 1.6-2.3 2.1-4.7 4.1-7 6.3l-4.7 4.1c-1.6 1.6-3.9 2.6-6.3 2.6-5 0-9-4.1-9-9s4-9 9-9c2.4 0 4.7 0.9 6.4 2.7l2.1 1.8-2.6 2.2-1.9-1.6c-1.1-1.2-2.5-1.7-4-1.7-3.1 0-5.6 2.5-5.6 5.6s2.5 5.6 5.6 5.6c1.5 0 2.9-0.5 4-1.6 2.3-2.1 4.7-4.1 7-6.3l4.7-4.1c1.6-1.6 3.9-2.6 6.3-2.6z"
									},
									"children": []
								}]
							}]
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "header",
					"attributes": {
						"className": ["centered", "title", "title-center"]
					},
					"children": [{
						"type": "Element",
						"tagName": "h2",
						"attributes": {},
						"children": [{
							"type": "Comment",
							"content": " react-text: 197 "
						}, {
							"type": "Text",
							"content": "The projects I've created"
						}, {
							"type": "Comment",
							"content": " /react-text "
						}]
					}]
				}, {
					"type": "Element",
					"tagName": "div",
					"attributes": {
						"className": ["content"]
					},
					"children": [{
						"type": "Element",
						"tagName": "div",
						"attributes": {},
						"children": [{
							"type": "Comment",
							"content": " react-empty: 200 "
						}, {
							"type": "Element",
							"tagName": "div",
							"attributes": {
								"className": ["grid", "grid-kek"]
							},
							"children": [{
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/leroy/1.PNG",
														"alt": "leroy",
														"title": "leroy"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "leroy"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of leroy"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/finam/1.PNG",
														"alt": "finam",
														"title": "finam"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "finam"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of finam"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/emex/1.PNG",
														"alt": "emex",
														"title": "emex"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "emex"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of emex"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/homecredit.ru/1.jpg",
														"alt": "homecredit.ru",
														"title": "homecredit.ru"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "homecredit.ru"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of homecredit.ru"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/cian/1.PNG",
														"alt": "cian",
														"title": "cian"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "cian"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of cian"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/tjonline/1.PNG",
														"alt": "tjonline",
														"title": "tjonline"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "tjonline"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of tjonline"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/worldclass/1.PNG",
														"alt": "worldclass",
														"title": "worldclass"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "worldclass"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of worldclass"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/foroffice.ru/1.PNG",
														"alt": "foroffice.ru",
														"title": "foroffice.ru"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "foroffice.ru"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of foroffice.ru"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/pop-music/1.PNG",
														"alt": "pop-music",
														"title": "pop-music"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "pop-music"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of pop-music"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/r4s/11.PNG",
														"alt": "r4s",
														"title": "r4s"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "r4s"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of r4s"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/shop.fc-zenit.ru/1.jpg",
														"alt": "shop.fc-zenit.ru",
														"title": "shop.fc-zenit.ru"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "shop.fc-zenit.ru"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of shop.fc-zenit.ru"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/avtocity/3.PNG",
														"alt": "avtocity",
														"title": "avtocity"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "avtocity"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of avtocity"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/tv3/1.jpg",
														"alt": "tv3",
														"title": "tv3"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "tv3"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of tv3"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/homeme.ru/1.jpg",
														"alt": "homeme.ru",
														"title": "homeme.ru"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "homeme.ru"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of homeme.ru"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "div",
								"attributes": {
									"className": ["grid-item"]
								},
								"children": [{
									"type": "Element",
									"tagName": "div",
									"attributes": {
										"className": ["pointer"]
									},
									"children": [{
										"type": "Element",
										"tagName": "div",
										"attributes": {
											"className": ["card"]
										},
										"children": [{
											"type": "Element",
											"tagName": "span",
											"attributes": {},
											"children": [{
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["card-cover"]
												},
												"children": [{
													"type": "Element",
													"tagName": "img",
													"attributes": {
														"className": ["card-cover-img"],
														"src": "assets/project_images/zakon.ru/1.jpg",
														"alt": "zakon.ru",
														"title": "zakon.ru"
													},
													"children": []
												}]
											}, {
												"type": "Element",
												"tagName": "h2",
												"attributes": {
													"className": ["card-title"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {},
													"children": [{
														"type": "Text",
														"content": "zakon.ru"
													}]
												}]
											}, {
												"type": "Element",
												"tagName": "p",
												"attributes": {
													"className": ["card-description"]
												},
												"children": [{
													"type": "Text",
													"content": "Developing mobile version of zakon.ru"
												}]
											}, {
												"type": "Element",
												"tagName": "div",
												"attributes": {
													"className": ["tags-group"]
												},
												"children": [{
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tags-icon"]
													},
													"children": [{
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle",
																"color": "white"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}, {
														"type": "Element",
														"tagName": "svg",
														"attributes": {
															"fill": "currentColor",
															"preserveAspectRatio": "xMidYMid meet",
															"height": "1em",
															"width": "1em",
															"viewBox": "0 0 40 40",
															"style": {
																"verticalAlign": "middle"
															}
														},
														"children": [{
															"type": "Element",
															"tagName": "g",
															"attributes": {},
															"children": [{
																"type": "Element",
																"tagName": "path",
																"attributes": {
																	"d": "m9.1 11.6c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m26.6 7.7c0.6 0.6 0.9 1.4 0.9 2.3s-0.3 1.8-0.9 2.4l-11.7 11.7c-0.6 0.6-1.4 0.9-2.4 0.9s-1.7-0.3-2.3-0.9l-15-15c-0.6-0.6-0.9-1.4-0.9-2.3v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8c0.9 0 1.7 0.3 2.3 0.9z"
																},
																"children": []
															}]
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Design"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Front-end"
														}]
													}]
												}, {
													"type": "Element",
													"tagName": "span",
													"attributes": {
														"className": ["tag"]
													},
													"children": [{
														"type": "Element",
														"tagName": "span",
														"attributes": {
															"className": ["text"]
														},
														"children": [{
															"type": "Text",
															"content": "Mobile"
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}, {
							"type": "Element",
							"tagName": "center",
							"attributes": {},
							"children": [{
								"type": "Element",
								"tagName": "br",
								"attributes": {},
								"children": []
							}, {
								"type": "Element",
								"tagName": "br",
								"attributes": {},
								"children": []
							}, {
								"type": "Element",
								"tagName": "button",
								"attributes": {
									"className": ["btn", "btn-success", "btn-lg", "btn-fill"],
									"type": "button"
								},
								"children": [{
									"type": "Element",
									"tagName": "canvas",
									"attributes": {
										"className": ["ink"],
										"height": 0,
										"width": 0,
										"style": {
											"borderRadius": "inherit",
											"height": "100%",
											"left": "0px",
											"position": "absolute",
											"top": "0px",
											"width": "100%"
										}
									},
									"children": []
								}, {
									"type": "Element",
									"tagName": "span",
									"attributes": {
										"className": ["label"]
									},
									"children": [{
										"type": "Text",
										"content": "Show me more awesome projects"
									}]
								}]
							}, {
								"type": "Element",
								"tagName": "br",
								"attributes": {},
								"children": []
							}, {
								"type": "Element",
								"tagName": "br",
								"attributes": {},
								"children": []
							}]
						}, {
							"type": "Comment",
							"content": " react-empty: 211 "
						}]
					}]
				}]
			}, {
				"type": "Comment",
				"content": " react-empty: 212 "
			}, {
				"type": "Comment",
				"content": " react-empty: 213 "
			}, {
				"type": "Comment",
				"content": " react-empty: 214 "
			}, {
				"type": "Comment",
				"content": " react-empty: 215 "
			}]
		}]
	}, {
		"type": "Element",
		"tagName": "div",
		"attributes": {},
		"children": [{
			"type": "Comment",
			"content": " react-empty: 217 "
		}]
	}]
}, {
	"type": "Text",
	"content": "\r\n"
}]
