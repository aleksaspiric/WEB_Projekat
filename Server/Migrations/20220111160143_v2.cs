using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FilmGlumacSpoj",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FilmId = table.Column<int>(type: "int", nullable: true),
                    GlumacId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FilmGlumacSpoj", x => x.ID);
                    table.ForeignKey(
                        name: "FK_FilmGlumacSpoj_Film_FilmId",
                        column: x => x.FilmId,
                        principalTable: "Film",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_FilmGlumacSpoj_Glumci_GlumacId",
                        column: x => x.GlumacId,
                        principalTable: "Glumci",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FilmGlumacSpoj_FilmId",
                table: "FilmGlumacSpoj",
                column: "FilmId");

            migrationBuilder.CreateIndex(
                name: "IX_FilmGlumacSpoj_GlumacId",
                table: "FilmGlumacSpoj",
                column: "GlumacId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FilmGlumacSpoj");
        }
    }
}
