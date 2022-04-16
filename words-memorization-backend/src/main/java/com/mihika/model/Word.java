package com.mihika.model;

import javax.persistence.*;

@Entity
@Table(name = "words")
public class Word {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "word")
	private String word;

	@Column(name = "meaning")
	private String meaning;

	public Word() {
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public String getMeaning() {
		return meaning;
	}

	public Word(String word, String meaning) {
		super();
		this.word = word;
		this.meaning = meaning;
	}

	public void setMeaning(String meaning) {
		this.meaning = meaning;
	}

	public int getId() {
		return id;
	}

}
