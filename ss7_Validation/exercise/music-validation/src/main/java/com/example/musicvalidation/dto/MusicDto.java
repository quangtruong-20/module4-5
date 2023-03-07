package com.example.musicvalidation.dto;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

public class MusicDto {

@NotBlank(message = "Không được để trống")
@Size(max = 800, message = "Không vượt quá 800 ký tự")
@Pattern(regexp = "^[a-zA-Z0-9]*$", message = "Chỉ chấp nhận ký tự chữ cái và số")
    private String name;
    @NotBlank(message = "Không được để trống")
    @Size(max = 300, message = "Không vượt quá 300 ký tự")
    @Pattern(regexp = "^[a-zA-Z0-9]*$", message = "Chỉ chấp nhận ký tự chữ cái và số")
    private String singer;
    @NotBlank(message = "Không được để trống")
    @Size(max = 1000, message = "Không vượt quá 1000 ký tự")
    @Pattern(regexp = "^[^,\\p{P}]*$", message = "Không được chứa ký tự đặc biệt")
    private String kindOfMusic;


    public MusicDto() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSinger() {
        return singer;
    }

    public void setSinger(String singer) {
        this.singer = singer;
    }

    public String getKindOfMusic() {
        return kindOfMusic;
    }

    public void setKindOfMusic(String kindOfMusic) {
        this.kindOfMusic = kindOfMusic;
    }
}
